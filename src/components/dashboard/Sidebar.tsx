import React, { useState } from 'react';
import { 
  BarChart3, 
  Star, 
  Building2, 
  Settings, 
  Users, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  TrendingUp
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
    { id: 'properties', label: 'Properties', icon: Building2 },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'guests', label: 'Guests', icon: Users },
    { id: 'ratings', label: 'Ratings', icon: Star },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } flex flex-col fixed left-0 top-0 h-screen z-10`}>
      {/* Header - Fixed Top */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Flex Living</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation - Scrollable Middle */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`w-full flex items-center rounded-lg text-left transition-colors ${
                isCollapsed 
                  ? 'justify-center px-2 py-3' 
                  : 'space-x-3 px-3 py-2'
              } ${
                item.active
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile - Fixed Bottom */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">FM</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Flex Manager</p>
              <p className="text-xs text-gray-500 truncate">manager@flexliving.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
