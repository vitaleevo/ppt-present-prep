/**
 * Type definitions for remote PostgreSQL database
 */

export interface RemoteService {
  id: number;
  name: string;
  description?: string;
  price?: number;
  category_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface RemotePackage {
  id: number;
  name: string;
  description?: string;
  price: number;
  features?: string[];
  service_id?: number;
  created_at?: string;
  updated_at?: string;
}

export interface RemoteTestimonial {
  id: number;
  name: string;
  company?: string;
  position?: string;
  content: string;
  rating?: number;
  avatar_url?: string;
  created_at?: string;
}

export interface RemotePortfolio {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  category?: string;
  tags?: string[];
  project_url?: string;
  created_at?: string;
}

export interface RemoteBlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author?: string;
  featured_image?: string;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RemoteCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  created_at?: string;
}

export interface RemoteContact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  created_at?: string;
}
