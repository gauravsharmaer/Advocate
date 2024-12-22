export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface CaseResult {
  id: number;
  title: string;
  description: string;
  outcome: string;
  amount?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  education: string[];
  admissions: string[];
}

export interface PracticeArea {
  id: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
}