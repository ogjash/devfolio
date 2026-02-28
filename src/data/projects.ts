export type Project = {
  title: string
  description: string
  projectImage: string
  backgroundImage: string
  cardTitle: string
  status: "live" | "building"
  link?: string
}

export const projects: Project[] = [
  {
    cardTitle: "GenAI",
    title: "Meetinc",
    description:
      "A platform to create AI agents tailored to specific niche - then join live meetings to have real-time conversations with your agents.",
    projectImage: "/images/projects/coming-soon.png",
    backgroundImage: "/images/pattern/bg1.jpg",
    status: "building",
  },
  {
    cardTitle: "Student Drop Prediction",
    title: "MentorSignal",
    description:
      "A platform for college mentors to predict student drop risk using our ML model, enabling early intervention and better student retention.",
    projectImage: "/images/projects/mentor-signal.png",
    backgroundImage: "/images/pattern/bg2.jpg",
    status: "building",
  },
  {
    cardTitle: "AI Queue Management",
    title: "Qmedix",
    description:
      "An AI-powered queue management and patient scheduling system for hospitals and clinics, reducing wait time and streamlining appointments.",
    projectImage: "/images/projects/qmedix.png",
    backgroundImage: "/images/pattern/bg3.jpg",
    status: "live",
  },
  {
    cardTitle: "Business Website",
    title: "Mehar Enterprises",
    description:
      "A freelance-built business website for an office supplies company - showcasing products, services, and company information.",
    projectImage: "/images/projects/mehar-enterprises.png",
    backgroundImage: "/images/pattern/bg4.jpg",
    status: "live",
  },
]
