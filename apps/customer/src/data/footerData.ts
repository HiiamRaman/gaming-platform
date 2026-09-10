export interface FooterLink {
  label: string;
  href: string;
}

export interface GameProvider {
  name: string;
  logo: string;
}

export const informationLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
  { label: "Blog", href: "/blog" },
];

export const helpCenterLinks: FooterLink[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export const gameProviders: GameProvider[] = [
  { name: "Evolution", logo: "/favicon.svg" },
  { name: "Pragmatic Play", logo: "/Footer/footer2.webp" },
  { name: "Sexy", logo: "/Footer/footer3.webp" },
  { name: "DreamGaming", logo: "/Footer/footer4.webp" },
  { name: "Ezugi", logo: "/Footer/footer5.webp" },
  { name: "YB Live", logo: "/Footer/footer6.webp" },
  { name: "Oriental Game", logo: "/Footer/footer7.webp" },
  { name: "Big Gaming", logo: "/Footer/footer8.webp" },
  { name: "Pretty Gaming", logo: "/Footer/footer9.webp" },
  { name: "Crazy Gaming", logo: "/Footer/footer10.webp" },
  { name: "JILI", logo: "/Footer/footer11.webp" },
  { name: "KingMidas", logo: "/Footer/footer12.webp" },
  { name: "BGaming", logo: "/Footer/footer13.webp" },
  { name: "Rich88", logo: "/Footer/footer14.webp" },
  { name: "Habanero", logo: "/Footer/footer15.webp" },
  { name: "Spadegaming", logo: "/Footer/footer2.webp" },
  { name: "PG Soft", logo: "/Footer/footer2.webp" },
  { name: "BNG", logo: "/Footer/footer2.webp" },
  { name: "Vertex Play", logo: "/Footer/footer2.webp" },
  { name: "JDB", logo: "/Footer/footer2.webp" },
  { name: "Rich", logo: "/Footer/footer2.webp" },
  { name: "InOut", logo: "/Footer/footer2.webp" },
];

export const certifications = [
  "BMM",
  "iTech Labs",
  "Cloudflare",
  "GoDaddy Secure",
  "LGMS"
];
