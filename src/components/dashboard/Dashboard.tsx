import React, { useState } from 'react';
import { DashboardFilters as DashboardFiltersType } from '../../types';
import { mockProperties } from '../../data/mockReviews';
import { useReviews } from '../../hooks/useReviews';
import DashboardHeader from './DashboardHeader';
import DashboardFilters from './DashboardFilters';
import StatsCards from './StatsCards';
import ReviewsList from './ReviewsList';
import PropertySelector from './PropertySelector';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const { reviews, loading, error, toggleApproval, getFilteredReviews, getReviewStats } = useReviews();
  const [filters, setFilters] = useState<DashboardFiltersType>({});
  const [selectedProperty, setSelectedProperty] = useState<string>('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const currentFilters = {
    ...filters,
    propertyId: selectedProperty === 'all' ? undefined : selectedProperty
  };

  const filteredReviews = getFilteredReviews(currentFilters);
  const stats = getReviewStats(filteredReviews);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <DashboardHeader />
        
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <PropertySelector
                properties={mockProperties}
                selectedProperty={selectedProperty}
                onPropertyChange={setSelectedProperty}
              />
            </div>

            <div className="mb-6">
              <DashboardFilters filters={filters} onFiltersChange={setFilters} />
            </div>

            <div className="mb-8">
              <StatsCards stats={stats} />
            </div>

            <ReviewsList
              reviews={filteredReviews}
              onToggleApproval={toggleApproval}
            />
          </div>
        </div>
      </div>
    </div>
  );
}