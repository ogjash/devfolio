export type Experience = {
  title: string;
  subtitle: string;
  timeline: string;
  location: string;
  description: string[];
  techStack: string[];
  logo: string;
};

export const freelance: Experience[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Freelance",
    timeline: "Sep, 2025 - Present",
    location: "India - Remote",
    description: [
      "Built pixel-perfect websites end-to-end with smooth, thoughtful user experience",
      "Worked closely with clients to turn rough ideas into clean, usable products",
      "Handled everything from design implementation to deployment and hosting",
      "Focused on performance, responsiveness, and intuitive, fast user interactions",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL" , "AWS", "Docker"],
    logo: "",
  },
];

export const experiences: Experience[] = [
  {
    title: "ML Research Intern",
    subtitle: "IEEE NSUT",
    timeline: "May, 2025 - Aug, 2025",
    location: "New Delhi, India",
    description: [
      "Built and compared LSTM, BiLSTM and a custom Residual Seq2Seq model to predict EV charging load",
      "Used PCA to reduce input dimensions, which helped improve accuracy and speed up training",
      "The Residual Seq2Seq model performed best — RMSE of 0.111 and MAE of 0.073",
      "Research was published on IEEE Xplore",
    ],
    techStack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
    logo: "/images/experiences/ieee.svg",
  },
];
