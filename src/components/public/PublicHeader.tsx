
import { Home, ArrowLeft } from 'lucide-react';

export default function PublicHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          {/* Left: Back to Dashboard Button */}
          <div className="absolute left-0 flex items-center">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              title="Back to Dashboard"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
          </div>

          {/* Center: Flex Living Logo - Absolutely Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">Flex Living</span>
          </div>

          {/* Right: Navigation Links */}
          <div className="absolute right-0 flex items-center">
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">Properties</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}