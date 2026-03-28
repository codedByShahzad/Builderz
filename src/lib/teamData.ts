export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  phoneHref: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Penelopa Miller",
    role: "Head of Production",
    image: "/images/team1.png",
    phoneHref: "tel:+1234567890",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Mark Ronaldo",
    role: "Sr. Engineer",
    image: "/images/team2.png",
    phoneHref: "tel:+1234567891",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "John Maxwell",
    role: "Project Management",
    image: "/images/team3.png",
    phoneHref: "tel:+1234567892",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Brooklyn James",
    role: "Site Supervisor",
    image: "/images/team1.png",
    phoneHref: "tel:+1234567893",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Daniel Carter",
    role: "Construction Planner",
    image: "/images/team2.png",
    phoneHref: "tel:+1234567894",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    name: "Chris Watson",
    role: "Field Architect",
    image: "/images/team3.png",
    phoneHref: "tel:+1234567895",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];