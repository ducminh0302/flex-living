import React from 'react';
import { BarChart3, ExternalLink } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reviews Dashboard</h1>
              <p className="text-gray-600">Manage property reviews and performance</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                // In a real app, this would navigate to the public reviews page
                window.open('/reviews', '_blank');
              }}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>View Public Page</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">FM</span>
              </div>
              <span className="text-gray-700 font-medium">Flex Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}