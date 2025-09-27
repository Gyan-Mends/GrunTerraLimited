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
  description?: string;
  completionDate?: string;
  client?: string;
  location?: string;
  projectValue?: string;
  duration?: string;
  features?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "A Great Hotel Project",
    category: "Commercial",
    image: "/images/project1.jpg",
    size: "large",
    alt: "A Great Hotel Project",
    description: "A luxury hotel development featuring 200 rooms, conference facilities, spa, and fine dining restaurants. This project showcases modern architecture with sustainable design elements.",
    completionDate: "June 2024",
    client: "Luxury Hotels International",
    location: "Downtown Business District",
    projectValue: "$25M",
    duration: "18 months",
    features: ["200 luxury rooms", "Conference center", "Spa & wellness center", "Fine dining restaurants", "Rooftop terrace", "Underground parking"],
    gallery: ["/images/project1.jpg", "/images/construction-hero.jpg", "/images/resident2.jpg"]
  },
  {
    id: 2,
    title: "High Tower Building",
    category: "Residential",
    image: "/images/tower.jpg",
    size: "medium",
    alt: "High Tower Building",
    description: "A modern residential tower offering luxury apartments with panoramic city views. Features state-of-the-art amenities and eco-friendly design.",
    completionDate: "August 2024",
    client: "Urban Living Corp",
    location: "Midtown Heights",
    projectValue: "$18M",
    duration: "14 months",
    features: ["150 luxury apartments", "Fitness center", "Swimming pool", "24/7 concierge", "Green roof garden", "Smart home technology"],
    gallery: ["/images/tower.jpg", "/images/resident3.jpg", "/images/scrapper.jpg"]
  },
  {
    id: 3,
    title: "Skyscraper Project",
    category: "Commercial",
    image: "/images/scrapper.jpg",
    size: "medium",
    alt: "Skyscraper Project",
    description: "A cutting-edge office building designed for the future of work. Features flexible spaces, advanced technology infrastructure, and sustainable building practices.",
    completionDate: "November 2024",
    client: "Future Workspace Inc.",
    location: "Financial District",
    projectValue: "$45M",
    duration: "24 months",
    features: ["40 floors of office space", "Sky gardens", "Conference facilities", "Electric vehicle charging", "LEED Platinum certified", "High-speed elevators"],
    gallery: ["/images/scrapper.jpg", "/images/construction2.jpg", "/images/project1.jpg"]
  },
  {
    id: 4,
    title: "Skyscraper Tower",
    category: "Mixed Use",
    image: "/images/section_two_image.jpg",
    size: "wide",
    alt: "Skyscraper Tower",
    description: "A mixed-use development combining residential, commercial, and retail spaces in one iconic tower. This project redefines urban living with integrated amenities.",
    completionDate: "February 2025",
    client: "Metropolitan Development",
    location: "City Center",
    projectValue: "$60M",
    duration: "30 months",
    features: ["Residential units", "Office spaces", "Retail plaza", "Food court", "Parking garage", "Public spaces"],
    gallery: ["/images/section_two_image.jpg", "/images/tower.jpg", "/images/resident2.jpg"]
  },
  {
    id: 5,
    title: "Luxury Villa Estate",
    category: "Residential",
    image: "/images/construction-hero.jpg",
    size: "large",
    alt: "Luxury Villa Estate",
    description: "A stunning luxury villa featuring modern architecture, premium finishes, and state-of-the-art amenities.",
    completionDate: "March 2025",
    client: "Private Residence",
    location: "Beverly Hills, CA",
    projectValue: "$8M",
    duration: "12 months",
    features: ["6 bedrooms", "8 bathrooms", "Home theater", "Wine cellar", "Infinity pool", "Smart home automation"],
    gallery: ["/images/construction-hero.jpg", "/images/resident3.jpg", "/images/contructor2.jpg"]
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "/images/resident2.jpg",
    size: "wide",
    alt: "Corporate Headquarters",
    description: "A modern 15-story corporate headquarters with sustainable design features and cutting-edge technology infrastructure.",
    completionDate: "January 2025",
    client: "Tech Solutions Inc.",
    location: "Downtown City",
    projectValue: "$35M",
    duration: "20 months",
    features: ["15 floors", "Green building design", "Tech infrastructure", "Employee amenities", "Cafeteria", "Fitness center"],
    gallery: ["/images/resident2.jpg", "/images/scrapper.jpg", "/images/tower.jpg"]
  },
  {
    id: 7,
    title: "Residential Complex",
    category: "Mixed Use",
    image: "/images/resident3.jpg",
    size: "medium",
    alt: "Residential Complex",
    description: "A mixed-use development combining residential units with retail spaces and community amenities.",
    completionDate: "December 2024",
    client: "Urban Development Corp",
    location: "Midtown District",
    projectValue: "$28M",
    duration: "16 months",
    features: ["200 residential units", "Retail spaces", "Community center", "Playground", "Green spaces", "Parking facilities"],
    gallery: ["/images/resident3.jpg", "/images/construction-hero.jpg", "/images/project1.jpg"]
  },
  {
    id: 8,
    title: "Highway Bridge Project",
    category: "Infrastructure",
    image: "/images/tower.jpg",
    size: "wide",
    alt: "Highway Bridge Project",
    description: "A major highway bridge construction project designed to improve regional transportation connectivity.",
    completionDate: "October 2024",
    client: "State Transportation Dept",
    location: "Interstate 95",
    projectValue: "$15M",
    duration: "10 months",
    features: ["4-lane bridge", "Pedestrian walkway", "Earthquake resistant", "LED lighting", "Noise barriers", "Environmental protection"],
    gallery: ["/images/tower.jpg", "/images/construction2.jpg", "/images/scrapper.jpg"]
  },
  {
    id: 9,
    title: "Shopping Center",
    category: "Commercial",
    image: "/images/scrapper.jpg",
    size: "medium",
    alt: "Shopping Center",
    description: "A modern shopping center featuring retail spaces, restaurants, and entertainment facilities.",
    completionDate: "September 2024",
    client: "Retail Properties LLC",
    location: "Suburban Plaza",
    projectValue: "$22M",
    duration: "14 months",
    features: ["80 retail units", "Food court", "Cinema complex", "Parking for 1000 cars", "Children's play area", "Event spaces"],
    gallery: ["/images/scrapper.jpg", "/images/resident2.jpg", "/images/construction-hero.jpg"]
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
    quote: "Grun Terra exceeded our expectations with their attention to detail and professional approach. Our office building was completed on time and within budget.",
    name: "Margaret Curtis",
    position: "Real Estate Developer",
    image: "/images/section_two_image.jpg",
    alt: "Margaret Curtis"
  },
  {
    id: 2,
    quote: "The team's expertise in luxury residential construction is unmatched. They brought our dream home vision to life with exceptional craftsmanship.",
    name: "Matthew Fox",
    position: "Homeowner",
    image: "/images/section_two_image.jpg",
    alt: "Matthew Fox"
  },
  {
    id: 3,
    quote: "Their infrastructure expertise and project management skills made our complex bridge project a success. Highly professional team.",
    name: "John Doe",
    position: "Project Manager, State Transportation",
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
  content?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
}

export const news: News[] = [
  {
    id: 1,
    title: "New Construction Technology Revolutionizes Building Process",
    excerpt: "Innovative construction methods and smart technology are transforming how we build modern structures, making projects faster and more efficient.",
    date: "September 15, 2024",
    image: "/images/section_two_image.jpg",
    alt: "Construction Technology",
    category: "Technology",
    content: "The construction industry is experiencing a technological revolution that's transforming how we approach building projects. From 3D printing to AI-powered project management, these innovations are making construction faster, more efficient, and more sustainable than ever before. Our latest projects incorporate cutting-edge technologies including Building Information Modeling (BIM), drone surveys, and IoT sensors for real-time monitoring.",
    author: "Sarah Johnson",
    readTime: "5 min read",
    tags: ["Technology", "Innovation", "BIM", "Construction"]
  },
  {
    id: 2,
    title: "Sustainable Building Practices for the Future",
    excerpt: "Exploring eco-friendly construction materials and green building techniques that reduce environmental impact while maintaining quality.",
    date: "September 10, 2024",
    image: "/images/section_two_image.jpg",
    alt: "Sustainable Building",
    category: "Sustainability",
    content: "Sustainability is no longer just a buzzword in construction—it's becoming a necessity. Our commitment to green building practices includes using recycled materials, implementing energy-efficient systems, and designing for minimal environmental impact. We're proud to be certified in LEED standards and continuously seek new ways to reduce our carbon footprint while delivering exceptional quality.",
    author: "Michael Brown",
    readTime: "4 min read",
    tags: ["Sustainability", "Green Building", "LEED", "Environment"]
  },
  {
    id: 3,
    title: "Grun Terra Wins Major Infrastructure Project",
    excerpt: "Our company has been selected to lead a landmark infrastructure development that will benefit the community for generations to come.",
    date: "September 5, 2024",
    image: "/images/section_two_image.jpg",
    alt: "Infrastructure Project",
    category: "Company News",
    content: "We're thrilled to announce that Grun Terra Limited has been awarded the contract for the new Metropolitan Bridge Project, a $50 million infrastructure development that will serve as a vital transportation link for the next century. This project represents our commitment to building lasting infrastructure that strengthens communities and supports economic growth.",
    author: "John Smith",
    readTime: "3 min read",
    tags: ["Infrastructure", "Bridge", "Community", "Award"]
  },
  {
    id: 4,
    title: "Safety First: Our Commitment to Workplace Safety",
    excerpt: "Learn about our comprehensive safety protocols and how we maintain the highest safety standards on every construction site.",
    date: "August 28, 2024",
    image: "/images/construction2.jpg",
    alt: "Construction Safety",
    category: "Safety",
    content: "Safety is paramount in everything we do at Grun Terra Limited. Our comprehensive safety program includes regular training, state-of-the-art protective equipment, and strict protocols that exceed industry standards. We're proud to maintain one of the best safety records in the industry, with zero major incidents in the past two years.",
    author: "Sarah Johnson",
    readTime: "6 min read",
    tags: ["Safety", "Training", "Protocols", "Workplace"]
  },
  {
    id: 5,
    title: "The Future of Smart Buildings",
    excerpt: "Exploring how IoT, AI, and smart systems are creating more efficient and comfortable buildings for the future.",
    date: "August 20, 2024",
    image: "/images/tower.jpg",
    alt: "Smart Buildings",
    category: "Technology",
    content: "Smart buildings are revolutionizing how we interact with our built environment. By integrating IoT sensors, AI-powered systems, and automated controls, we're creating buildings that adapt to occupant needs, optimize energy usage, and predict maintenance requirements. Our latest commercial projects feature these advanced systems that reduce operating costs by up to 30%.",
    author: "Michael Brown",
    readTime: "7 min read",
    tags: ["Smart Buildings", "IoT", "AI", "Efficiency"]
  },
  {
    id: 6,
    title: "Celebrating 20 Years of Excellence",
    excerpt: "Looking back at two decades of successful projects and looking forward to the future of construction.",
    date: "August 15, 2024",
    image: "/images/construction-hero.jpg",
    alt: "20 Years Anniversary",
    category: "Company News",
    content: "This year marks a significant milestone for Grun Terra Limited as we celebrate 20 years of delivering exceptional construction projects. From our humble beginnings as a small local contractor to becoming a leading construction company, this journey has been marked by dedication, innovation, and an unwavering commitment to quality.",
    author: "John Smith",
    readTime: "4 min read",
    tags: ["Anniversary", "History", "Milestone", "Growth"]
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