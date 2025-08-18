import React, { useState } from 'react';
import { useReviews } from '../../hooks/useReviews';
import { mockProperties } from '../../data/mockReviews';
import PublicHeader from './PublicHeader';
import PropertyHero from './PropertyHero';
import ReviewsSection from './ReviewsSection';

export default function PublicReviews() {
  const { reviews, loading } = useReviews();
  const [selectedPropertyId, setSelectedPropertyId] = useState('prop-001');
  
  const selectedProperty = mockProperties.find(p => p.id === selectedPropertyId);
  const approvedReviews = reviews.filter(r => r.isApproved && r.propertyId === selectedPropertyId);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!selectedProperty) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Property not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />
      <PropertyHero property={selectedProperty} />
      
      {/* Property Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex space-x-4 overflow-x-auto">
          {mockProperties.map((property) => (
            <button
              key={property.id}
              onClick={() => setSelectedPropertyId(property.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-colors ${
                property.id === selectedPropertyId
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {property.name}
            </button>
          ))}
        </div>
      </div>

      <ReviewsSection 
        reviews={approvedReviews} 
        property={selectedProperty}
      />
    </div>
  );
}