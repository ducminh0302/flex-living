import React from 'react';
import { Property } from '../../types';
import { Star, MapPin, Wifi, Car, Coffee, Tv } from 'lucide-react';

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {property.name}
            </h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-blue-100">{property.address}</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{property.averageRating}</span>
                <span className="text-blue-100">({property.totalReviews} reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-2 rounded-lg">
                <Wifi className="h-4 w-4" />
                <span className="text-sm">Free WiFi</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-2 rounded-lg">
                <Car className="h-4 w-4" />
                <span className="text-sm">Parking</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-2 rounded-lg">
                <Coffee className="h-4 w-4" />
                <span className="text-sm">Kitchen</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-30 px-3 py-2 rounded-lg">
                <Tv className="h-4 w-4" />
                <span className="text-sm">Smart TV</span>
              </div>
            </div>

            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Book Now
            </button>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-10 bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={property.name}
                className="w-full h-64 lg:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}