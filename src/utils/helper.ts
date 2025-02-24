import { FacebookIcon } from "./icons";

interface NavbarItem {
  title: string;
  link: string;
  dropdown?: NavbarItem[];
}

interface MarqueeItem {
  title: string;
  price: string;
}

interface FooterLink {
  title: string;
  link: string;
}

interface FooterDisclaimers {
  title: string;
  description: string;
  descriptionTwo?: any;
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

export const FOOTERLINKS_LIST: FooterLink[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Us",
    link: "#about-us",
  },
  {
    title: "How It Works",
    link: "#how-it-works",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "FAQs",
    link: "#faqs",
  },
  {
    title: "Contact Us",
    link: "#contact-us",
  },
];

export const FOOTERDISCLAIMERS_LIST: FooterDisclaimers[] = [
  {
    title: "Trade Responsibility Disclaimer",
    description:
      "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.",
  },
  {
    title: "Disclaimer",
    description:
      "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
    descriptionTwo:
      "Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license.",
  },
];
