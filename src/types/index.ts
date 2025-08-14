export interface Service {
  id: number;
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon?: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  published_date: string;
  slug: string;
  tags: string[];
  featured_image?: string;
}

export interface Testimonial {
  id: number;
  client_name: string;
  rating: number;
  review: string;
  case_type?: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface LawyerProfile {
  id: number;
  name: string;
  title: string;
  bio: string;
  image?: string;
  specializations: string[];
  experience_years: number;
  education: string[];
  bar_admissions: string[];
}
