# Flex Living Reviews Dashboard

A comprehensive reviews management system for Flex Living properties, built with React, TypeScript, and Tailwind CSS.

## Features

### Manager Dashboard
- **Property Overview**: Switch between properties to view performance metrics
- **Advanced Filtering**: Filter by rating, channel, date range, and approval status
- **Review Management**: Approve/disapprove reviews for public display
- **Analytics**: View key metrics including average ratings, approval rates, and channel breakdown
- **Detailed Review View**: Modal interface for full review examination

### Public Display
- **Property Showcase**: Beautiful property hero sections with amenities
- **Verified Reviews**: Display only manager-approved reviews
- **Rating Breakdown**: Category-specific ratings for each review
- **Responsive Design**: Optimized for all device sizes

### Hostaway Integration
- **API Integration**: Connects to Hostaway Reviews API (mocked for demo)
- **Data Normalization**: Processes and structures review data consistently
- **Error Handling**: Robust error management and user feedback

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Architecture**: Component-based with custom hooks

## Key Design Decisions

### 1. Component Architecture
- **Modular Structure**: Each component focuses on a single responsibility
- **Custom Hooks**: `useReviews` hook manages all review-related state and operations
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures

### 2. State Management
- **Local State**: Uses React's built-in state management for simplicity
- **Data Flow**: Unidirectional data flow with clear prop interfaces
- **Performance**: Efficient filtering and sorting without external libraries

### 3. API Design
- **Mock Implementation**: Hostaway API integration with realistic mock data
- **Normalization**: Consistent data structure regardless of source
- **Error Boundaries**: Graceful error handling throughout the application

### 4. User Experience
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **Performance**: Lazy loading, optimized re-renders, minimal bundle size

## API Behaviors

### Hostaway Integration
The `/api/reviews/hostaway` endpoint (demonstrated in `src/api/routes.ts`) would:

1. **Authentication**: Use provided API key for Hostaway authentication
2. **Data Fetching**: Retrieve reviews from Hostaway's sandbox environment
3. **Normalization**: Convert raw API responses to standardized format
4. **Error Handling**: Provide meaningful error messages for failed requests

### Data Structure
```typescript
interface Review {
  id: number;
  type: 'host-to-guest' | 'guest-to-host';
  rating: number | null;
  publicReview: string;
  reviewCategory: ReviewCategory[];
  submittedAt: string;
  guestName: string;
  listingName: string;
  channel: string;
  isApproved: boolean;
  propertyId: string;
}
```

## Google Reviews Exploration

### Findings
After exploring Google Reviews integration options:

1. **Google Places API**: Provides read-only access to Google reviews
2. **Limitations**: Cannot programmatically approve/disapprove Google reviews
3. **Implementation**: Would require separate handling from Hostaway reviews
4. **Recommendation**: Keep Google reviews as read-only supplementary data

### Potential Integration
```typescript
// Example Google Places API integration
const getGoogleReviews = async (placeId: string) => {
  const response = await fetch(`/api/google/reviews/${placeId}`);
  return response.json();
};
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## File Structure

```
src/
├── components/
│   ├── dashboard/          # Manager dashboard components
│   └── public/            # Public-facing components
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── data/                  # Mock data and fixtures
├── api/                   # API integration logic
└── utils/                 # Utility functions
```

## Future Enhancements

1. **Real-time Updates**: WebSocket integration for live review updates
2. **Analytics Dashboard**: Advanced metrics and trend analysis
3. **Automated Moderation**: AI-powered review screening
4. **Multi-language Support**: International property support
5. **Mobile App**: React Native version for on-the-go management

## Testing Strategy

The application includes comprehensive error handling and loading states. For production deployment, consider adding:

- Unit tests for all components
- Integration tests for API endpoints
- E2E tests for critical user journeys
- Performance testing for large datasets