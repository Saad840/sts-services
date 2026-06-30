import { asset } from "./assets.js";
import { navGroups } from "./navigation.js";

export const serviceCards = [
  { title: "Engineering Solutions", image: asset("2023/05/Engineering-Solutions-2.jpg"), heading: "Integrated Engineering & Design Services", copy: "Dynamically reinvent market-driven solutions and ubiquitous interfaces. Energistically fabricate an expanded array of niche services throughout PLM process.", bullets: ["Product Design", "Engineering Analysis and Simulation", "Reverse Engineering | Drafting & Detailing | Value Engineering", "Technical Documentation"], href: "/service/product-design-and-development/" },
  { title: "AEC Services", image: asset("2020/09/AEC-Services-530x432.jpg"), heading: "Multidisciplinary BIM Services", copy: "One stop solution partner for pre-construction, high-quality CAD solutions and BIM outsourcing services to leading contractors, architects and engineers across the globe.", bullets: ["Architectural BIM | MEP BIM | Scan to BIM", "Family Creation", "Support upto LOD 500", "Lighting Design"], href: "/service/architectural-bim-modeling-services/" },
  { title: "Contract Staffing", image: asset("2020/09/Contract-Staffing.jpg"), heading: "Onsite / Contract Manpower", copy: "Milestone serves specialized technical projects with tech manpower augmentation, managed services, onsite manpower and technical hiring.", bullets: ["Managed Services", "Onsite Manpower", "Technical Hiring"], href: "/service/contract-staffing-services/" }
];

const servicesNavGroup = navGroups.find((group) => group.label === "Services");

export const allServices = servicesNavGroup.mega.flatMap(([category, links]) =>
  links.map(([title, href]) => ({ title, href, category }))
);
