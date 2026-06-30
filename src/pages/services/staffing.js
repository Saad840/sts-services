import { staffingServiceShell } from "../../components/service-layout.js";
import { serviceAccordions } from "./shared.js";

export function contractStaffingPage() {
  const content = `
    <h2>Contract Staffing:</h2>
    <p>Over the years, MILESTONE has served the niche market of specialized technical projects to great success. We offer impeccable service for tech manpower augmentation.</p>
    <h2 id="managed-services">Managed Services:</h2>
    <p>We provide tailored Onsite contract staffing services to suit our client's technology manpower needs. We act like an extended business support function allowing you to focus on your core business activities. We manage the hiring, retention, and performance of onsite staff as per agreed SLAs.</p>
    <h2 id="onsite-manpower">Onsite Manpower:</h2>
    <p>We are entrusted by many global clients for over a decade to augment their onsite technical resources need. We offer high-caliber professionals having the CAD and FEA Tools expertise to deliver projects on time with quality output, best practices, and use the most modern software.</p>
    <h2 id="technical-hiring">Tech Hiring:</h2>
    <p>Input from individuals with the appropriate subject or technical expertise to ensure the development of outputs that are fit for the purpose.</p>
    ${serviceAccordions()}`;

  return staffingServiceShell({
    title: "Contract Staffing Services",
    image: "/assets/images/services/detail/contract-staffing-services-hero.jpg",
    activeHref: "/service/contract-staffing-services/"
  }, content);
}
