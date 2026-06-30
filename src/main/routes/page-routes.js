import { staticPages, jobs } from "../../data/index.js";
import {
  aboutPage,
  awardsRecognitionsPage,
  companyOverviewPage,
  dataSecurityPage,
  lifeAtMilestonePage,
  whyMilestonePage,
  workCulturePage
} from "../../pages/about.js";
import { contactPage } from "../../pages/contact.js";
import { faqPage } from "../../pages/faq.js";
import { careersPage, jobDetailPage } from "../../pages/hiring.js";
import { home } from "../../pages/home.js";
import { searchPage } from "../../pages/search.js";
import { staticPage, testimonialsPage, privacyPolicyPage, termsConditionsPage, ourProcessPage } from "../../pages/content.js";

export function resolvePageRoute(current) {
  const job = jobs.find((item) => item[4] === current);

  if (current === "/") return home();
  if (current === "/contact-us/") return contactPage();
  if (current === "/careers-page/" || current === "/careers_archive/") return careersPage();
  if (current === "/about-us/") return aboutPage();
  if (current === "/search/") return searchPage();
  if (current === "/testimonials1/") return testimonialsPage();
  if (current === "/privacy-policy/") return privacyPolicyPage();
  if (current === "/terms-and-conditions/") return termsConditionsPage();
  if (job) return jobDetailPage(job);
  if (current === "/work-culture-at-milestone/") return workCulturePage();
  if (current === "/life-at-milestone/") return lifeAtMilestonePage();
  if (current === "/faq/") return faqPage();
  if (current === "/our-process/") return ourProcessPage();
  if (current === "/company-overview-page/") return companyOverviewPage();
  if (current === "/company-overview/awards-recognitions/") return awardsRecognitionsPage();
  if (current === "/company-overview/why-milestone/") return whyMilestonePage();
  if (current === "/data-security-confidentiality/") return dataSecurityPage();
  if (staticPages[current]) return staticPage(staticPages[current]);

  return undefined;
}
