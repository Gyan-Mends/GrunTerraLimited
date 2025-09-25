// Services Data
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Residential Construction",
    description: "Custom home building and residential projects designed to meet your specific needs and lifestyle requirements.",
    image: "/images/construction-hero.jpg",
    alt: "Residential Construction"
  },
  {
    id: 2,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial developments built with precision and professional expertise.",
    image: "/images/resident2.jpg",
    alt: "Commercial Projects"
  },
  {
    id: 3,
    title: "Infrastructure Development",
    description: "Roads, bridges, and infrastructure projects that form the backbone of communities and economic growth.",
    image: "/images/resident3.jpg",
    alt: "Infrastructure Development"
  }
];

// Projects Data
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'large' | 'medium' | 'wide';
  alt: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "A Great Hotel Project",
    category: "Commercial Development",
    image: "/images/project1.jpg",
    size: "large",
    alt: "A Great Hotel Project"
  },
  {
    id: 2,
    title: "High Tower Building",
    category: "Residential",
    image: "/images/tower.jpg",
    size: "medium",
    alt: "High Tower Building"
  },
  {
    id: 3,
    title: "Skyscraper Project",
    category: "Commercial",
    image: "/images/scrapper.jpg",
    size: "medium",
    alt: "Skyscraper Project"
  },
  {
    id: 4,
    title: "Skyscraper Tower",
    category: "Mixed Use",
    image: "/images/section_two_image.jpg",
    size: "wide",
    alt: "Skyscraper Tower"
  }
];

// Testimonials Data
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  image: string;
  alt: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "Margaret Curtis",
    position: "Real Estate Developer",
    image: "/images/section_two_image.jpg",
    alt: "Margaret Curtis"
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "Matthew Fox",
    position: "Development Company",
    image: "/images/section_two_image.jpg",
    alt: "Matthew Fox"
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "John Doe",
    position: "Architect",
    image: "/images/section_two_image.jpg",
    alt: "John Doe"
  }
];

// News Data
export interface News {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  alt: string;
  category: string;
}

export const news: News[] = [
  {
    id: 1,
    title: "New Construction Technology Revolutionizes Building Process",
    excerpt: "Innovative construction methods and smart technology are transforming how we build modern structures, making projects faster and more efficient.",
    date: "September 15, 2025",
    image: "/images/section_two_image.jpg",
    alt: "Construction Technology",
    category: "Technology"
  },
  {
    id: 2,
    title: "Sustainable Building Practices for the Future",
    excerpt: "Exploring eco-friendly construction materials and green building techniques that reduce environmental impact while maintaining quality.",
    date: "September 10, 2025",
    image: "/images/section_two_image.jpg",
    alt: "Sustainable Building",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Grun Terra Wins Major Infrastructure Project",
    excerpt: "Our company has been selected to lead a landmark infrastructure development that will benefit the community for generations to come.",
    date: "September 5, 2025",
    image: "/images/section_two_image.jpg",
    alt: "Infrastructure Project",
    category: "Company News"
  }
];

// Team Data
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  alt: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in construction management, John leads our team with vision and expertise.",
    image: "/images/section_two_image.jpg",
    alt: "John Smith - CEO",
    social: {
      linkedin: "#",
      email: "john@grunterra.com"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Project Manager",
    bio: "Sarah specializes in large-scale commercial projects and ensures every detail meets our high standards.",
    image: "/images/section_two_image.jpg",
    alt: "Sarah Johnson - Project Manager",
    social: {
      linkedin: "#",
      email: "sarah@grunterra.com"
    }
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Lead Engineer",
    bio: "Michael brings innovative engineering solutions to complex construction challenges with precision and creativity.",
    image: "/images/section_two_image.jpg",
    alt: "Michael Brown - Lead Engineer",
    social: {
      linkedin: "#",
      email: "michael@grunterra.com"
    }
  },
  
];