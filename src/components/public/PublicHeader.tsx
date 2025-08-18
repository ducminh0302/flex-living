import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

export default function PublicHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Back to Dashboard Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex-shrink-0"
            title="Back to Dashboard"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Dashboard</span>
          </button>

          {/* Center: Flex Living Logo */}
          <div className="flex items-center space-x-2 flex-1 justify-center min-w-0">
            <Home className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <span className="text-xl font-bold text-gray-900 truncate">Flex Living</span>
          </div>

          {/* Right: Navigation Links (hidden on mobile) */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">Properties</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">Contact</a>
            </nav>
            {/* Invisible spacer to balance the left button on smaller screens */}
            <div className="lg:hidden w-40 sm:w-48"></div>
          </div>
        </div>
      </div>
    </header>
  );
}