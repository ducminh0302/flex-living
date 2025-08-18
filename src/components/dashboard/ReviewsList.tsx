import React, { useState } from 'react';
import { Review } from '../../types';
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';

interface ReviewsListProps {
  reviews: Review[];
  onToggleApproval: (reviewId: number) => void;
}

export default function ReviewsList({ reviews, onToggleApproval }: ReviewsListProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <p className="text-gray-500 text-lg">No reviews found matching your filters.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Reviews ({reviews.length})
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Manage and approve reviews for public display
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onToggleApproval={onToggleApproval}
            onViewDetails={() => setSelectedReview(review)}
          />
        ))}
      </div>

      {selectedReview && (
        <ReviewModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
          onToggleApproval={onToggleApproval}
        />
      )}
    </div>
  );
}