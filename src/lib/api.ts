import axios from 'axios';
import { Service, Article, Testimonial, ContactForm } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Services
  getServices: async (): Promise<Service[]> => {
    try {
      const response = await api.get('/api/services');
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },

  getService: async (id: number): Promise<Service | null> => {
    try {
      const response = await api.get(`/api/services/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching service:', error);
      return null;
    }
  },

  // Articles
  getArticles: async (page: number = 1, limit: number = 10): Promise<{
    articles: Article[];
    total: number;
    pages: number;
  }> => {
    try {
      const response = await api.get(`/api/articles?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      return { articles: [], total: 0, pages: 0 };
    }
  },

  getArticle: async (slug: string): Promise<Article | null> => {
    try {
      const response = await api.get(`/api/articles/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching article:', error);
      return null;
    }
  },

  getFeaturedArticles: async (limit: number = 3): Promise<Article[]> => {
    try {
      const response = await api.get(`/api/articles/featured?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured articles:', error);
      return [];
    }
  },

  // Testimonials
  getTestimonials: async (): Promise<Testimonial[]> => {
    try {
      const response = await api.get('/api/testimonials');
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  // Contact
  submitContactForm: async (data: ContactForm): Promise<boolean> => {
    try {
      await api.post('/api/contact', data);
      return true;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return false;
    }
  },
};

export default apiService;
