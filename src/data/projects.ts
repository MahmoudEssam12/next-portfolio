export interface Project {
  title: string;
  details: string;
  imgSrc: string;
  url: string;
  githubLink?: string;
  technologies: string[];
  summary: string;
  company?: string;
  position?: string;
}

export const projects: Project[] = [
  {
    title: "Tameeni Motor",
    summary:
      "KSA's largest online motor insurance aggregator — instant policy comparison and purchase across 23+ providers.",
    details:
      "Contributed to building and optimizing Tameeni Motor, Saudi Arabia's first and biggest insurance aggregator serving 8M+ users and 25,000+ daily transactions. Built multi-step quote comparison flows, responsive vehicle/driver data forms with real-time validation, and integrated insurer APIs for accurate live pricing.",
    imgSrc: "/images/tameeni.webp",
    url: "",
    technologies: ["React", "Next.js", "TypeScript"],
    company: "Rasan",
    position: "Frontend Developer",
  },
  {
    title: "Aman Web Stores",
    summary:
      "Mobile-first e-commerce UI with installment checkout, OCR verification, and Magento-integrated product filtering.",
    details:
      "Built a fully responsive e-commerce storefront integrated with Magento for dynamic product listings, filtering, and sorting. Implemented a complete installment checkout flow supporting cash, card, and Aman card with OCR document verification. Reduced initial page load time by ~35% and improved Lighthouse score from 65 to 88 via lazy loading, JS minification, and CSS optimization.",
    imgSrc: "/images/aman.webp",
    url: "",
    technologies: ["React", "Next.js", "Docker", "Magento"],
    company: "Uniparticle",
    position: "Frontend Developer",
  },
  {
    title: "Glancers",
    summary:
      "Upwork-style freelancing marketplace with job posting, bidding, contracts, and real-time community feed.",
    details:
      "Built a full freelancing platform with job posting, bidding, and contract management workflows. Developed a community module with a real-time post feed and chat system supporting 50+ concurrent connections. Integrated Paymob Payment Gateway with full transaction lifecycle and webhook handling. Deployed on Nginx + PM2 with SSR, achieving 99.9% uptime.",
    imgSrc: "/images/glancers.webp",
    url: "",
    technologies: ["React", "Next.js", "Firebase", "AWS S3", "Nginx", "PM2", "Paymob"],
    company: "Uniparticle",
    position: "Frontend Developer",
  },
  {
    title: "Zoop EGate",
    summary:
      "Real-time collaboration platform with video conferencing, chat, and multi-method payment checkout.",
    details:
      "Built across a monorepo with two separate apps sharing a unified design system using ShadCN UI and Tailwind CSS. Integrated Agora SDK for live video conferencing and chat with concurrent session management. Implemented PayPal Braintree supporting PayPal, Google Wallet, and Apple Pay in a single checkout layer. Handled secure file uploads to AWS S3 up to 50MB with CDN delivery.",
    imgSrc: "/images/zoop-egate.webp",
    url: "",
    technologies: ["React", "Shadcn/ui", "Tailwind CSS", "AWS S3", "Agora SDK", "PayPal Braintree"],
    company: "Uniparticle",
    position: "Frontend Developer",
  },
  {
    title: "Mafaza",
    summary:
      "Location-based app with optimized map rendering, GPS detection, and sub-2s load performance.",
    details:
      "Optimized map rendering and GPS location detection, reducing location error rate by ~25% in high-density urban areas. Achieved sub-2s First Contentful Paint via code splitting, strategic caching, and efficient rendering pipelines. Established scalable component architecture and state management conventions adopted as team-wide standards.",
    imgSrc: "/images/mafaza.webp",
    url: "",
    technologies: ["React", "Next.js", "Firebase"],
    company: "Uniparticle",
    position: "Frontend Developer",
  },
  {
    title: "Rock Paper Scissors",
    details: "",
    imgSrc: "/images/rock-paper.webp",
    url: "https://rockpaperscissorsme.netlify.app/",
    githubLink: "https://github.com/MahmoudEssam12/rockPaperScissors",
    technologies: ["JavaScript", "CSS", "HTML"],
    summary:
      "A fun and interactive Rock Paper Scissors game built with vanilla JavaScript, featuring score tracking and smooth animated transitions for an engaging user experience.",
    // company: "Uniparticle",
    // position: "Frontend Developer",
  },
];
