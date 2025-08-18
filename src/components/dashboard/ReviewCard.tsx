import React from 'react';
import { Review } from '../../types';
import { Star, Calendar, Globe, User, CheckCircle, Clock, Eye } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
  onToggleApproval: (reviewId: number) => void;
  onViewDetails: () => void;
}

export default function ReviewCard({ review, onToggleApproval, onViewDetails }: ReviewCardProps) {
  const getRatingStars = (rating: number | null) => {
    if (rating === null) return 'N/A';
    return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
      <div className="space-y-3">
        {/* Header với guest name và actions */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <User className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="font-medium text-gray-900 truncate">{review.guestName}</span>
          </div>
          
          {/* Actions - luôn hiển thị bên phải */}
          <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
            <button
              onClick={onViewDetails}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="View details"
            >
              <Eye className="h-5 w-5" />
            </button>

            <div className="flex items-center space-x-2">
              {review.isApproved ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Clock className="h-5 w-5 text-amber-500" />
              )}
              
              <button
                onClick={() => onToggleApproval(review.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  review.isApproved
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {review.isApproved ? 'Approved' : 'Pending'}
              </button>
            </div>
          </div>
        </div>

        {/* Metadata - responsive layout */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center space-x-1">
            <Globe className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{review.channel}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{formatDate(review.submittedAt)}</span>
          </div>
          
          {review.rating && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-medium text-gray-900">
                {review.rating}/5
              </span>
              <span className="text-yellow-500 hidden sm:inline">
                {getRatingStars(review.rating)}
              </span>
            </div>
          )}
        </div>

        {/* Property name */}
        <h3 className="text-sm font-medium text-gray-900">
          {review.listingName}
        </h3>

        {/* Review content */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {review.publicReview}
        </p>

        {/* Category ratings */}
        {review.reviewCategory.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {review.reviewCategory.slice(0, 3).map((category, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
              >
                {category.category}: {category.rating}/5
              </span>
            ))}
            {review.reviewCategory.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                +{review.reviewCategory.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}