import React from 'react';
import { ReviewStats } from '../../types';
import { Star, MessageSquare, CheckCircle, Clock, TrendingUp } from 'lucide-react';

interface StatsCardsProps {
  stats: ReviewStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Total Reviews */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <MessageSquare className="h-8 w-8 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Reviews</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalReviews}</p>
          </div>
        </div>
      </div>

      {/* Average Rating */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <Star className="h-8 w-8 text-yellow-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Average Rating</p>
            <p className="text-2xl font-bold text-gray-900">
              {stats.averageRating.toFixed(1)}
              <span className="text-sm text-gray-500 ml-1">/ 5.0</span>
            </p>
          </div>
        </div>
      </div>

      {/* Approved Reviews */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Approved</p>
            <p className="text-2xl font-bold text-gray-900">{stats.approvedReviews}</p>
          </div>
        </div>
      </div>

      {/* Pending Reviews */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <Clock className="h-8 w-8 text-amber-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-gray-900">{stats.pendingReviews}</p>
          </div>
        </div>
      </div>

      {/* Approval Rate */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <TrendingUp className="h-8 w-8 text-indigo-600" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Approval Rate</p>
            <p className="text-2xl font-bold text-gray-900">
              {stats.totalReviews > 0 
                ? Math.round((stats.approvedReviews / stats.totalReviews) * 100)
                : 0}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}