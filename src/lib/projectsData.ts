export type ProjectFeature = {
  icon: "contractor" | "supervision" | "steel";
  title: string;
  description: string;
};

export type ProjectItem = {
  id: number;
  slug: string;
  category: string;
  title: string;
  completedDate: string;
  shortDescription: string;
  image: string;
  overviewTitle: string;
  overviewText: string;
  features: ProjectFeature[];
  testimonial: {
    quote: string;
    name: string;
    designation: string;
  };
};

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    slug: "general-construction",
    category: "BUILDING",
    title: "General Construction",
    completedDate: "09,01,2024",
    shortDescription:
      "Modern commercial construction project with premium façade design and strong structural planning.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
    overviewTitle: "Project Overview",
    overviewText:
      "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leapinto electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    features: [
      {
        icon: "contractor",
        title: "Full Principal Contractor service",
        description: "There are many passages of lorem ipsum available",
      },
      {
        icon: "supervision",
        title: "Full-time Onsite Supervision",
        description: "There are many passages of lorem ipsum available",
      },
      {
        icon: "steel",
        title: "Timber and steel frame construction",
        description: "There are many passages of lorem ipsum available",
      },
    ],
    testimonial: {
      quote:
        "Tortor posuere ac ut consequat tellus elem isis etum sag ittis vitae atleo duis ut diam odio ut sem nulla phar. Purus sit ame nus mas highly efficient solution whereas open-source application.",
      name: "Aleesha Brown",
      designation: "Company, CEO",
    },
  },
  {
    id: 2,
    slug: "urban-business-complex",
    category: "COMMERCIAL",
    title: "Urban Business Complex",
    completedDate: "14,02,2024",
    shortDescription:
      "A modern mixed-use commercial complex designed for functionality and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    overviewTitle: "Project Overview",
    overviewText:
      "This project combines elegant architectural style with practical planning. Every area was built for daily business performance, modern usage, and long-term durability in a busy urban environment.",
    features: [
      {
        icon: "contractor",
        title: "End-to-end contractor execution",
        description: "Complete planning and project delivery service",
      },
      {
        icon: "supervision",
        title: "Dedicated site monitoring",
        description: "Daily oversight to maintain quality and timeline",
      },
      {
        icon: "steel",
        title: "Concrete and steel framework",
        description: "Built with strong structural reinforcement",
      },
    ],
    testimonial: {
      quote:
        "The team handled the full project professionally and delivered exactly what was promised with excellent finishing quality.",
      name: "Michael Thomas",
      designation: "Project Director",
    },
  },
  {
    id: 3,
    slug: "residential-luxury-block",
    category: "RESIDENTIAL",
    title: "Luxury Residential Block",
    completedDate: "28,03,2024",
    shortDescription:
      "Elegant residential development with premium exterior finishing and spacious interior planning.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    overviewTitle: "Project Overview",
    overviewText:
      "The residential block was designed to provide a premium living experience with strong construction quality, clean layouts, natural light, and lasting comfort for modern families.",
    features: [
      {
        icon: "contractor",
        title: "Complete residential execution",
        description: "From structural work to finishing and handover",
      },
      {
        icon: "supervision",
        title: "Onsite quality supervision",
        description: "Focused on details and daily progress checks",
      },
      {
        icon: "steel",
        title: "Durable hybrid frame system",
        description: "Reliable structure with lasting performance",
      },
    ],
    testimonial: {
      quote:
        "Everything from the planning to the final finish felt premium. The result was clean, modern, and professionally managed.",
      name: "Sophia Martin",
      designation: "Property Owner",
    },
  },
  {
    id: 4,
    slug: "industrial-warehouse-hub",
    category: "INDUSTRIAL",
    title: "Industrial Warehouse Hub",
    completedDate: "12,05,2024",
    shortDescription:
      "A large industrial facility developed for logistics efficiency and heavy-duty use.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    overviewTitle: "Project Overview",
    overviewText:
      "This industrial build focused on operational efficiency, high-span usability, structural reliability, and fast access logistics for long-term commercial use.",
    features: [
      {
        icon: "contractor",
        title: "Industrial contractor solutions",
        description: "Large-scale management with execution precision",
      },
      {
        icon: "supervision",
        title: "Safety and site compliance",
        description: "Strong monitoring at every construction stage",
      },
      {
        icon: "steel",
        title: "Heavy steel frame support",
        description: "Built for industrial durability and performance",
      },
    ],
    testimonial: {
      quote:
        "The delivery was smooth, the communication was strong, and the final structure matched our industrial requirements perfectly.",
      name: "David Wilson",
      designation: "Operations Head",
    },
  },
  {
    id: 5,
    slug: "corporate-head-office",
    category: "OFFICE",
    title: "Corporate Head Office",
    completedDate: "25,06,2024",
    shortDescription:
      "A refined office headquarters designed for executive workspaces and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    overviewTitle: "Project Overview",
    overviewText:
      "This head office project was created to support a strong company presence with premium materials, modern finishes, and efficient space planning throughout the building.",
    features: [
      {
        icon: "contractor",
        title: "Corporate fit-out execution",
        description: "Well-managed planning and final site delivery",
      },
      {
        icon: "supervision",
        title: "Architectural coordination",
        description: "Close collaboration across all project stages",
      },
      {
        icon: "steel",
        title: "Modern frame engineering",
        description: "Strong base with premium design support",
      },
    ],
    testimonial: {
      quote:
        "A polished and modern office environment that reflects our brand well and supports both leadership and team productivity.",
      name: "Emma Roberts",
      designation: "Managing Director",
    },
  },
  {
  id: 6,
  slug: "hospital-medical-center",
  category: "HEALTHCARE",
  title: "Advanced Medical Center",
  completedDate: "10,07,2024",
  shortDescription:
    "A state-of-the-art healthcare facility designed for modern medical services and patient comfort.",
  image:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop",
  overviewTitle: "Project Overview",
  overviewText:
    "This healthcare facility was designed with patient experience and operational efficiency in mind. The structure includes advanced medical infrastructure, clean layouts, and future-ready expansion planning.",
  features: [
    {
      icon: "contractor",
      title: "Medical facility execution",
      description: "Specialized construction for healthcare needs",
    },
    {
      icon: "supervision",
      title: "Strict quality compliance",
      description: "Built under regulated safety standards",
    },
    {
      icon: "steel",
      title: "Reinforced structural system",
      description: "Durable and long-lasting construction",
    },
  ],
  testimonial: {
    quote:
      "The team delivered a highly functional and modern medical space that meets all our operational needs.",
    name: "Dr. Ahmed Khan",
    designation: "Hospital Director",
  },
},

{
  id: 7,
  slug: "shopping-mall-development",
  category: "COMMERCIAL",
  title: "City Shopping Mall",
  completedDate: "18,08,2024",
  shortDescription:
    "A large-scale shopping destination built for retail growth and customer experience.",
  image:
    "https://images.unsplash.com/photo-1519567770579-c2fc5f3c5f05?q=80&w=1600&auto=format&fit=crop",
  overviewTitle: "Project Overview",
  overviewText:
    "This shopping mall project was developed with a focus on high footfall, optimized store layouts, and a modern retail environment that enhances customer engagement.",
  features: [
    {
      icon: "contractor",
      title: "Retail construction expertise",
      description: "Designed for high-traffic environments",
    },
    {
      icon: "supervision",
      title: "Project timeline control",
      description: "Efficient and on-time delivery",
    },
    {
      icon: "steel",
      title: "Large-span structural design",
      description: "Supports wide open retail spaces",
    },
  ],
  testimonial: {
    quote:
      "A perfectly executed commercial project that has significantly boosted our retail operations.",
    name: "James Walker",
    designation: "Mall Owner",
  },
},

{
  id: 8,
  slug: "luxury-villa-community",
  category: "RESIDENTIAL",
  title: "Luxury Villa Community",
  completedDate: "05,09,2024",
  shortDescription:
    "A premium residential villa project offering high-end living with modern architectural design.",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  overviewTitle: "Project Overview",
  overviewText:
    "This villa community was designed to provide a luxurious lifestyle with spacious layouts, premium materials, and a strong focus on aesthetics and comfort.",
  features: [
    {
      icon: "contractor",
      title: "Luxury home construction",
      description: "High-end finishes and detailing",
    },
    {
      icon: "supervision",
      title: "Detail-focused execution",
      description: "Precision in every construction phase",
    },
    {
      icon: "steel",
      title: "Modern hybrid structure",
      description: "Combining strength with design flexibility",
    },
  ],
  testimonial: {
    quote:
      "The villas exceeded our expectations in both design and quality. Truly premium work.",
    name: "Olivia Harris",
    designation: "Homeowner",
  },
}
];