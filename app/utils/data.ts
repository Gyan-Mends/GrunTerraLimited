// Services Data
export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Residential Construction",
    description: "Custom home building and residential projects designed to meet your specific needs and lifestyle requirements."
  },
  {
    id: 2,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial developments built with precision and professional expertise."
  },
  {
    id: 3,
    title: "Infrastructure Development",
    description: "Roads, bridges, and infrastructure projects that form the backbone of communities and economic growth."
  },
  {
    id: 4,
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery, budget compliance, and quality standards."
  },
  {
    id: 5,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with modern upgrades, structural improvements, and aesthetic enhancements."
  },
  {
    id: 6,
    title: "Consulting Services",
    description: "Expert advice on construction planning, feasibility studies, and technical consultations for your projects."
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