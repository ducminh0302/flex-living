import { useState, useEffect } from 'react';
import { Review, DashboardFilters, ReviewStats } from '../types';
import { HostawayAPI } from '../api/hostaway';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const api = HostawayAPI.getInstance();
      const fetchedReviews = await api.fetchReviews();
      setReviews(fetchedReviews);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  const toggleApproval = (reviewId: number) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === reviewId 
          ? { ...review, isApproved: !review.isApproved }
          : review
      )
    );
  };

  const getFilteredReviews = (filters: DashboardFilters): Review[] => {
    return reviews.filter(review => {
      if (filters.propertyId && review.propertyId !== filters.propertyId) return false;
      if (filters.rating && review.rating !== filters.rating) return false;
      if (filters.channel && review.channel !== filters.channel) return false;
      if (filters.status) {
        if (filters.status === 'approved' && !review.isApproved) return false;
        if (filters.status === 'pending' && review.isApproved) return false;
      }
      if (filters.dateRange) {
        const reviewDate = new Date(review.submittedAt);
        const startDate = new Date(filters.dateRange.start);
        const endDate = new Date(filters.dateRange.end);
        if (reviewDate < startDate || reviewDate > endDate) return false;
      }
      return true;
    });
  };

  const getReviewStats = (filteredReviews: Review[]): ReviewStats => {
    const totalReviews = filteredReviews.length;
    const approvedReviews = filteredReviews.filter(r => r.isApproved).length;
    const pendingReviews = totalReviews - approvedReviews;
    
    const ratingsWithValues = filteredReviews.filter(r => r.rating !== null);
    const averageRating = ratingsWithValues.length > 0 
      ? ratingsWithValues.reduce((sum, r) => sum + (r.rating || 0), 0) / ratingsWithValues.length
      : 0;

    const ratingDistribution = [1, 2, 3, 4, 5].map(rating => ({
      rating,
      count: filteredReviews.filter(r => Math.round(r.rating || 0) === rating).length
    }));

    const channelCounts = filteredReviews.reduce((acc, review) => {
      acc[review.channel] = (acc[review.channel] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const channelBreakdown = Object.entries(channelCounts).map(([channel, count]) => ({
      channel,
      count
    }));

    return {
      totalReviews,
      averageRating: Math.round(averageRating * 100) / 100,
      approvedReviews,
      pendingReviews,
      ratingDistribution,
      channelBreakdown
    };
  };

  return {
    reviews,
    loading,
    error,
    loadReviews,
    toggleApproval,
    getFilteredReviews,
    getReviewStats
  };
}