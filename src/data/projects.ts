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
      "Create niche AI agents and have real-time meeting conversations.",
    projectImage: "/images/projects/coming-soon.png",
    backgroundImage: "/images/pattern/bg4.jpg",
    status: "building",
  },
  {
    cardTitle: "Student Drop Prediction",
    title: "MentorSignal",
    description:
      "Predict student drop risk with ML for early mentor intervention.",
    projectImage: "/images/projects/mentor-signal.png",
    backgroundImage: "/images/pattern/bg3.jpg",
    status: "live",
  },
  {
    cardTitle: "AI Queue Management",
    title: "Qmedix",
    description:
      "AI-powered queue management and patient scheduling for hospitals and clinics.",
    projectImage: "/images/projects/qmedix.png",
    backgroundImage: "/images/pattern/bg1.jpg",
    status: "live",
  },
  {
    cardTitle: "Business Website",
    title: "Mehar Enterprises",
    description:
      "Business website for an office supplies company showcasing products and services.",
    projectImage: "/images/projects/mehar-enterprises.png",
    backgroundImage: "/images/pattern/bg2.jpg",
    status: "live",
  },
]
