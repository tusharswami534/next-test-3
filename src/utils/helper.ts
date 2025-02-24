interface NavbarItem {
  title: string;
  link: string;
  dropdown?: NavbarItem[];
}

interface MarqueeItem {
  title: string;
  price: string;
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

export const MARQUEE_LIST: MarqueeItem[] = [
  {
    title: "USDJPY",
    price: "143.651 / 143.637",
  },
  {
    title: "US30",
    price: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    price: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    price: "143.651 / 143.637",
  },
  {
    title: "US30",
    price: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    price: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    price: "143.651 / 143.637",
  },
  {
    title: "US30",
    price: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    price: "18948.45 / 18945.15",
  },
];
