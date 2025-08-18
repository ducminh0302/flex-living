import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reviews Dashboard</h1>
            <p className="text-gray-600">Manage property reviews and performance</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                // In a real app, this would navigate to the public reviews page
                window.open('/reviews', '_blank');
              }}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              title="View Public Page"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">View Public Page</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}