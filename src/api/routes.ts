// This file demonstrates the API route structure that would be implemented
// In a real application, this would be a backend API endpoint

import { Review } from '../types';
import { HostawayAPI } from './hostaway';

/**
 * GET /api/reviews/hostaway
 * 
 * Fetches and normalizes reviews from the Hostaway API
 * Returns structured, usable data for the frontend
 */
export async function getHostawayReviews(): Promise<{ success: boolean; data: Review[]; error?: string }> {
  try {
    const api = HostawayAPI.getInstance();
    const reviews = await api.fetchReviews();
    
    return {
      success: true,
      data: reviews
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Example of how this would be called from a frontend:
 * 
 * const response = await fetch('/api/reviews/hostaway');
 * const result = await response.json();
 * 
 * if (result.success) {
 *   setReviews(result.data);
 * } else {
 *   setError(result.error);
 * }
 */