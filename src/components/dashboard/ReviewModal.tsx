import React from 'react';
import { Review } from '../../types';
import { X, Star, Calendar, Globe, User, CheckCircle, Clock } from 'lucide-react';

interface ReviewModalProps {
  review: Review;
  onClose: () => void;
  onToggleApproval: (reviewId: number) => void;
}

export default function ReviewModal({ review, onClose, onToggleApproval }: ReviewModalProps) {
  const getRatingStars = (rating: number | null) => {
    if (rating === null) return 'N/A';
    return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Review Details</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Review Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="font-semibold text-gray-900">{review.guestName}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{review.channel}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {review.isApproved ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Clock className="h-5 w-5 text-amber-500" />
              )}
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                review.isApproved
                  ? 'bg-green-100 text-green-800'
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {review.isApproved ? 'Approved' : 'Pending'}
              </span>
            </div>
          </div>

          {/* Property Info */}
          <div>
            <h3 className="font-medium text-gray-900 mb-1">{review.listingName}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(review.submittedAt)}</span>
              </div>
              
              {review.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{review.rating}/5</span>
                  <span className="text-yellow-500 ml-1">
                    {getRatingStars(review.rating)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Review Content */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Review</h4>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {review.publicReview}
            </p>
          </div>

          {/* Category Ratings */}
          {review.reviewCategory.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Category Ratings</h4>
              <div className="grid grid-cols-2 gap-4">
                {review.reviewCategory.map((category, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {category.category.replace('_', ' ')}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-900">
                          {category.rating}/5
                        </span>
                        <span className="text-yellow-500 text-sm">
                          {'★'.repeat(Math.round(category.rating))}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              Close
            </button>
            
            <button
              onClick={() => {
                onToggleApproval(review.id);
                onClose();
              }}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                review.isApproved
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {review.isApproved ? 'Unapprove' : 'Approve'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}