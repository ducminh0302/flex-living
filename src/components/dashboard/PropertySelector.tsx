import React from 'react';
import { Property } from '../../types';
import { Building2 } from 'lucide-react';

interface PropertySelectorProps {
  properties: Property[];
  selectedProperty: string;
  onPropertyChange: (propertyId: string) => void;
}

export default function PropertySelector({ properties, selectedProperty, onPropertyChange }: PropertySelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Building2 className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Select Property</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={() => onPropertyChange('all')}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedProperty === 'all'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="text-left">
            <div className="font-medium text-gray-900">All Properties</div>
            <div className="text-sm text-gray-500">View all reviews</div>
          </div>
        </button>
        
        {properties.map((property) => (
          <button
            key={property.id}
            onClick={() => onPropertyChange(property.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedProperty === property.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-left">
              <div className="font-medium text-gray-900 truncate">{property.name}</div>
              <div className="text-sm text-gray-500">{property.address}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium text-blue-600">
                  ★ {property.averageRating}
                </span>
                <span className="text-sm text-gray-500">
                  {property.totalReviews} reviews
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}