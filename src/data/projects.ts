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
    cardTitle: "CP Platform",
    title: "CodeConquer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam.",
    projectImage:"/images/projects/coming-soon.png",
    backgroundImage: "/images/pattern/bg5.jpg",
    status: "building",
  },
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
    link: "https://sih-impact-crew.vercel.app",
    description:
      "Predict student drop risk with ML for early mentor intervention.",
    projectImage: "/images/projects/mentor-signal.png",
    backgroundImage: "/images/pattern/bg3.jpg",
    status: "live",
  },
  {
    cardTitle: "AI Queue Management",
    title: "Qmedix",
    link: "https://qmedix.vercel.app",
    description:
      "AI-powered queue management and patient scheduling for hospitals and clinics.",
    projectImage: "/images/projects/qmedix.png",
    backgroundImage: "/images/pattern/bg1.jpg",
    status: "live",
  },
  {
    cardTitle: "Web3 Wallet",
    title: "Shulkur",
    link: "https://shulker-wallet.vercel.app",
    description:
      "Web based crypto wallet based on Solana and Ethereum blockchain.",
    projectImage: "/images/projects/shulker.png",
    backgroundImage: "/images/pattern/bg6.jpg",
    status: "live",
  },
  {
    cardTitle: "Business Website",
    title: "Mehar Enterprises",
    link: "https://mehar-enterprises.vercel.app",
    description:
      "Business website for an office supplies company showcasing products and services.",
    projectImage: "/images/projects/mehar-enterprises.png",
    backgroundImage: "/images/pattern/bg2.jpg",
    status: "live",
  },
]
