import React from 'react';
import { Review, Property } from '../../types';
import { Star, User, Calendar } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: Review[];
  property: Property;
}

export default function ReviewsSection({ reviews, property }: ReviewsSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getRatingStars = (rating: number | null) => {
    if (rating === null) return null;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.round(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {getRatingStars(property.averageRating)}
            </div>
            <span className="text-xl font-semibold text-gray-900">
              {property.averageRating}
            </span>
          </div>
          <span className="text-gray-600">
            Based on {reviews.length} verified reviews
          </span>
        </div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No approved reviews to display yet.</p>
          <p className="text-gray-400 text-sm mt-2">
            Reviews are carefully moderated before appearing here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{review.guestName}</p>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {formatDate(review.submittedAt)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {review.rating && (
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {getRatingStars(review.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-700 ml-1">
                      {review.rating}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.publicReview}
              </p>

              {review.reviewCategory.length > 0 && (
                <div className="border-t border-gray-100 pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {review.reviewCategory.slice(0, 4).map((category, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-xs text-gray-600 capitalize">
                          {category.category.replace('_', ' ')}
                        </span>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-medium text-gray-700">
                            {category.rating}
                          </span>
                          <div className="flex">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < category.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}