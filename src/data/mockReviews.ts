import { Review, Property } from '../types';

export const mockProperties: Property[] = [
  {
    id: 'prop-001',
    name: '2B N1 A - 29 Shoreditch Heights',
    address: '29 Shoreditch Heights, London',
    averageRating: 4.2,
    totalReviews: 24,
    approvedReviews: 18
  },
  {
    id: 'prop-002', 
    name: '1B Central - Kings Cross Station',
    address: 'Kings Cross Station, London',
    averageRating: 4.5,
    totalReviews: 31,
    approvedReviews: 28
  },
  {
    id: 'prop-003',
    name: '3B Luxury - Canary Wharf Tower',
    address: 'Canary Wharf Tower, London', 
    averageRating: 4.8,
    totalReviews: 19,
    approvedReviews: 17
  }
];

export const mockReviews: Review[] = [
  {
    id: 7453,
    type: 'host-to-guest',
    status: 'published',
    rating: null,
    publicReview: 'Shane and family are wonderful! Would definitely host again :)',
    reviewCategory: [
      { category: 'cleanliness', rating: 10 },
      { category: 'communication', rating: 10 },
      { category: 'respect_house_rules', rating: 10 }
    ],
    submittedAt: '2020-08-21 22:45:14',
    guestName: 'Shane Finkelstein',
    listingName: '2B N1 A - 29 Shoreditch Heights',
    channel: 'Airbnb',
    isApproved: true,
    propertyId: 'prop-001'
  },
  {
    id: 7454,
    type: 'guest-to-host',
    status: 'published',
    rating: 5,
    publicReview: 'Amazing location in the heart of Shoreditch. The apartment was spotless and had everything we needed. Sarah was incredibly responsive and helpful throughout our stay.',
    reviewCategory: [
      { category: 'cleanliness', rating: 5 },
      { category: 'communication', rating: 5 },
      { category: 'location', rating: 5 },
      { category: 'value', rating: 4 }
    ],
    submittedAt: '2024-01-15 14:22:30',
    guestName: 'Michael Rodriguez',
    listingName: '2B N1 A - 29 Shoreditch Heights',
    channel: 'Airbnb',
    isApproved: true,
    propertyId: 'prop-001'
  },
  {
    id: 7455,
    type: 'guest-to-host',
    status: 'published',
    rating: 4,
    publicReview: 'Great stay overall! The Kings Cross location is perfect for transport links. Only minor issue was the shower pressure could be better.',
    reviewCategory: [
      { category: 'cleanliness', rating: 4 },
      { category: 'communication', rating: 5 },
      { category: 'location', rating: 5 },
      { category: 'value', rating: 4 }
    ],
    submittedAt: '2024-01-12 09:15:45',
    guestName: 'Emma Thompson',
    listingName: '1B Central - Kings Cross Station',
    channel: 'Booking.com',
    isApproved: false,
    propertyId: 'prop-002'
  },
  {
    id: 7456,
    type: 'guest-to-host',
    status: 'published',
    rating: 5,
    publicReview: 'Absolutely stunning apartment with incredible views of London. The Canary Wharf location is perfect for business travelers. Highly recommend!',
    reviewCategory: [
      { category: 'cleanliness', rating: 5 },
      { category: 'communication', rating: 5 },
      { category: 'location', rating: 5 },
      { category: 'value', rating: 5 }
    ],
    submittedAt: '2024-01-10 16:30:22',
    guestName: 'David Chen',
    listingName: '3B Luxury - Canary Wharf Tower',
    channel: 'Airbnb',
    isApproved: true,
    propertyId: 'prop-003'
  },
  {
    id: 7457,
    type: 'guest-to-host',
    status: 'published',
    rating: 3,
    publicReview: 'Nice apartment but had some issues with heating during our stay. Location is great though and the host was responsive to our concerns.',
    reviewCategory: [
      { category: 'cleanliness', rating: 4 },
      { category: 'communication', rating: 5 },
      { category: 'location', rating: 5 },
      { category: 'value', rating: 3 }
    ],
    submittedAt: '2024-01-08 11:45:18',
    guestName: 'Sophie Williams',
    listingName: '2B N1 A - 29 Shoreditch Heights',
    channel: 'VRBO',
    isApproved: false,
    propertyId: 'prop-001'
  },
  {
    id: 7458,
    type: 'guest-to-host',
    status: 'published',
    rating: 5,
    publicReview: 'Perfect for our London getaway! Clean, modern, and in an amazing location. The host provided excellent local recommendations.',
    reviewCategory: [
      { category: 'cleanliness', rating: 5 },
      { category: 'communication', rating: 5 },
      { category: 'location', rating: 5 },
      { category: 'value', rating: 5 }
    ],
    submittedAt: '2024-01-05 19:20:55',
    guestName: 'James Anderson',
    listingName: '1B Central - Kings Cross Station',
    channel: 'Airbnb',
    isApproved: true,
    propertyId: 'prop-002'
  }
];