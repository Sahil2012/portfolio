export const siteData = {
  profile: {
    name: "Himanshu J.",
    fullName: "Himanshu Jangid",
    title: "Building digital experiences",
    description:
      "Full-stack developer crafting elegant solutions with modern technologies. Passionate about creating intuitive and performant web applications.",
  },
  navigation: [
    { label: "Creations", href: "/creations" },
    { label: "Work", href: "/work" },
    { label: "More", href: "/more" },
  ],
  contact: {
    calLink: "https://cal.com/himanshujangid",
  },
  social: {
    github: "https://github.com/himanshujangid",
    linkedin: "https://linkedin.com/in/himanshujangid",
    twitter: "https://twitter.com/himanshujangid",
  },
} as const;

export type SiteData = typeof siteData;
