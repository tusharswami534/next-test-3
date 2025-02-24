interface NavbarItem {
  title: string;
  link: string;
  dropdown?: NavbarItem[];
}

export const NAVBAR_LIST: NavbarItem[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Learn to trade",
    link: "#learn-to-trade",
  },
  {
    title: "Promotions",
    link: "#promotions",
    dropdown: [
      { title: "Promotion 1", link: "#promotion1" },
      { title: "Promotion 2", link: "#promotion2" },
    ],
  },
  {
    title: "Arrowtrade",
    link: "#arrowtrade",
  },
  {
    title: "Blog",
    link: "#blog",
  },
];
