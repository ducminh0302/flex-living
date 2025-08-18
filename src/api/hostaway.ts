import { Review } from '../types';
import { mockReviews } from '../data/mockReviews';

const HOSTAWAY_API_BASE = 'https://api.hostaway.com';
const ACCOUNT_ID = '61148';
const API_KEY = 'f94377ebbbb479490bb3ec364649168dc443dda2e4830facaf5de2e74ccc9152';

export class HostawayAPI {
  private static instance: HostawayAPI;
  
  static getInstance(): HostawayAPI {
    if (!HostawayAPI.instance) {
      HostawayAPI.instance = new HostawayAPI();
    }
    return HostawayAPI.instance;
  }

  async fetchReviews(): Promise<Review[]> {
    try {
      // In production, this would make actual API call:
      // const response = await fetch(`${HOSTAWAY_API_BASE}/v1/reviews`, {
      //   headers: {
      //     'Authorization': `Bearer ${API_KEY}`,
      //     'Content-Type': 'application/json'
      //   }
      // });
      
      // Since the API is sandboxed and contains no reviews, we use mock data
      console.log('Fetching reviews from Hostaway API (mocked)...');
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return this.normalizeReviews(mockReviews);
    } catch (error) {
      console.error('Error fetching Hostaway reviews:', error);
      throw new Error('Failed to fetch reviews from Hostaway API');
    }
  }

  private normalizeReviews(rawReviews: any[]): Review[] {
    return rawReviews.map(review => ({
      id: review.id,
      type: review.type,
      status: review.status,
      rating: review.rating !== null ? review.rating : this.calculateOverallRating(review.reviewCategory),
      publicReview: review.publicReview,
      reviewCategory: review.reviewCategory || [],
      submittedAt: review.submittedAt,
      guestName: review.guestName,
      listingName: review.listingName,
      channel: review.channel || 'Airbnb',
      isApproved: review.isApproved ?? false,
      propertyId: review.propertyId || 'unknown'
    }));
  }

  private calculateOverallRating(categories: any[]): number | null {
    if (!categories || categories.length === 0) return null;
    
    const total = categories.reduce((sum, cat) => sum + cat.rating, 0);
    // Convert from 10-point scale to 5-point scale
    const average = total / categories.length;
    return Math.round((average / 2) * 100) / 100;
  }
}