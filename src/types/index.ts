export interface Review {
  id: number;
  type: 'host-to-guest' | 'guest-to-host';
  status: 'published' | 'pending' | 'declined';
  rating: number | null;
  publicReview: string;
  reviewCategory: ReviewCategory[];
  submittedAt: string;
  guestName: string;
  listingName: string;
  channel: string;
  isApproved?: boolean;
  propertyId: string;
}

export interface ReviewCategory {
  category: string;
  rating: number;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  averageRating: number;
  totalReviews: number;
  approvedReviews: number;
}

export interface DashboardFilters {
  propertyId?: string;
  rating?: number;
  category?: string;
  channel?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  status?: string;
}

export interface ReviewStats {
  totalReviews: number;
  averageRating: number;
  approvedReviews: number;
  pendingReviews: number;
  ratingDistribution: { rating: number; count: number }[];
  channelBreakdown: { channel: string; count: number }[];
}