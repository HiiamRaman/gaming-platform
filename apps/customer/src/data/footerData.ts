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
  { name: "Evolution", logo:'/favicon.svg' },
  { name: "Pragmatic Play", logo: "/src/assets/footer/footer2.webp" },
  { name: "Sexy", logo: "/src/assets/footer/footer3.webp" },
  { name: "DreamGaming", logo: "/src/assets/footer/footer4.webp" },
  { name: "Ezugi", logo: "/src/assets/footer/footer5.webp" },
  { name: "YB Live", logo: "/src/assets/footer/footer6.webp" },
  { name: "Oriental Game", logo: "/src/assets/footer/footer7.webp" },
  { name: "Big Gaming", logo: "/src/assets/footer/footer8.webp" },
  { name: "Pretty Gaming", logo: "/src/assets/footer/footer9.webp" },
  { name: "Crazy Gaming", logo: "/src/assets/footer/footer10.webp" },
  { name: "JILI", logo: "/src/assets/footer/footer11.webp" },
  { name: "KingMidas", logo: "/src/assets/footer/footer12.webp" },
  { name: "BGaming", logo: "/src/assets/footer/footer13.webp" },
  { name: "Rich88", logo: "/src/assets/footer/footer14.webp" },
  { name: "Habanero", logo: "/src/assets/footer/footer15.webp" },
  { name: "Spadegaming", logo: "/src/assets/footer/footer2.webp" },
  { name: "PG Soft", logo: "/src/assets/footer/footer2.webp" },
  { name: "BNG", logo: "/src/assets/footer/footer2.webp" },
  { name: "Vertex Play", logo: "/src/assets/footer/footer2.webp"},
  { name: "JDB", logo: "/src/assets/footer/footer2.webp" },
  { name: "Rich", logo: "/src/assets/footer/footer2.webp" },
  { name: "InOut", logo: "/src/assets/footer/footer2.webp" },
];

export const certifications = [
  "BMM",
  "iTech Labs",
  "Cloudflare",
  "GoDaddy Secure",
  "LGMS"
];
