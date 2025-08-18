import React, { useState } from 'react';
import Dashboard from './dashboard/Dashboard';
import PublicReviews from './public/PublicReviews';

type Route = 'dashboard' | 'reviews';

export default function Router() {
  const [currentRoute, setCurrentRoute] = useState<Route>('dashboard');

  // Simple client-side routing for demo purposes
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/reviews') {
      setCurrentRoute('reviews');
    } else {
      setCurrentRoute('dashboard');
    }
  }, []);

  // Handle route changes
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/reviews') {
        setCurrentRoute('reviews');
      } else {
        setCurrentRoute('dashboard');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentRoute === 'reviews') {
    return <PublicReviews />;
  }

  return <Dashboard />;
}