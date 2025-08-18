import { useState } from 'react';
import { Menu, ExternalLink } from 'lucide-react';
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
  const { loading, error, toggleApproval, getFilteredReviews, getReviewStats } = useReviews();
  const [filters, setFilters] = useState<DashboardFiltersType>({});
  const [selectedProperty, setSelectedProperty] = useState<string>('all');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <div className="flex items-center space-x-2 flex-1 justify-center min-w-0">
          <span className="text-lg font-semibold text-gray-900 truncate">Dashboard</span>
        </div>
        
        <button
          onClick={() => {
            window.open('/reviews', '_blank');
          }}
          className="flex items-center space-x-1 px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex-shrink-0"
          title="View Public Page"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="hidden xs:inline text-sm">View</span>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        isMobileOpen={mobileMenuOpen}
        onMobileToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
      } ml-0`}>
        {/* Desktop Header */}
        <div className="hidden md:block">
          <DashboardHeader />
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-8">
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