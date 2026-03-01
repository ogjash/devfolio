export type Blog = {
  title: string;
  date: string;
  topics: string[];
  link: string;
};

export const blogs: Blog[] = [
  {
    title: "Make Neovim your daily use fully fledge IDE",
    date: "March 2026",
    topics: ["Neovim", "IDE", "Productivity"],
    link: "https://medium.com/@jashanpreet.singh.10004/make-neovim-your-daily-use-fully-fledge-ide-42f64812c46b",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipiscing",
    date: "February 2026",
    topics: ["Lorem", "Ipsum", "Dolor"],
    link: "#",
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus error",
    date: "January 2026",
    topics: ["Sed", "Perspiciatis", "Omnis"],
    link: "#",
  },
];
