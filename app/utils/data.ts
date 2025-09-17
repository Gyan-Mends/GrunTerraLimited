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
    image: "/images/section_two_image.jpg",
    alt: "Residential Construction"
  },
  {
    id: 2,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial developments built with precision and professional expertise.",
    image: "/images/section_two_image.jpg",
    alt: "Commercial Projects"
  },
  {
    id: 3,
    title: "Infrastructure Development",
    description: "Roads, bridges, and infrastructure projects that form the backbone of communities and economic growth.",
    image: "/images/section_two_image.jpg",
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
    image: "/images/section_two_image.jpg",
    size: "large",
    alt: "A Great Hotel Project"
  },
  {
    id: 2,
    title: "High Tower Building",
    category: "Residential",
    image: "/images/section_two_image.jpg",
    size: "medium",
    alt: "High Tower Building"
  },
  {
    id: 3,
    title: "Skyscraper Project",
    category: "Commercial",
    image: "/images/section_two_image.jpg",
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