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
  { name: "Evolution", logo: "/images/providers/evolution.png" },
  { name: "Pragmatic Play", logo: "/images/providers/pragmatic.png" },
  { name: "Sexy", logo: "/images/providers/sexy.png" },
  { name: "DreamGaming", logo: "/images/providers/dg.png" },
  { name: "Ezugi", logo: "/images/providers/ezugi.png" },
  { name: "YB Live", logo: "/images/providers/yblive.png" },
  { name: "Oriental Game", logo: "/images/providers/oriental.png" },
  { name: "Big Gaming", logo: "/images/providers/biggaming.png" },
  { name: "Pretty Gaming", logo: "/images/providers/pretty.png" },
  { name: "Crazy Gaming", logo: "/images/providers/crazy.png" },
  { name: "JILI", logo: "/images/providers/jili.png" },
  { name: "KingMidas", logo: "/images/providers/kingmidas.png" },
  { name: "BGaming", logo: "/images/providers/bgaming.png" },
  { name: "Rich88", logo: "/images/providers/rich88.png" },
  { name: "Habanero", logo: "/images/providers/habanero.png" },
  { name: "Spadegaming", logo: "/images/providers/spadegaming.png" },
  { name: "PG Soft", logo: "/images/providers/pgsoft.png" },
  { name: "BNG", logo: "/images/providers/bng.png" },
  { name: "Vertex Play", logo: "/images/providers/vertex.png" },
  { name: "JDB", logo: "/images/providers/jdb.png" },
  { name: "Rich", logo: "/images/providers/rich.png" },
  { name: "InOut", logo: "/images/providers/inout.png" },
];

export const certifications = [
  "BMM",
  "iTech Labs",
  "Cloudflare",
  "GoDaddy Secure",
  "LGMS"
];
