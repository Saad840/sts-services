import { recentPosts } from "../data/index.js";
import { link } from "./navigation-link.js";

function footerRecentPosts() {
  return [...recentPosts]
    .sort((a, b) => Date.parse(b[2] || "") - Date.parse(a[2] || ""))
    .slice(0, 3)
    .map(link)
    .join("");
}

export function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section class="footer-contact">
          <h3>Contact</h3>
          <p><span class="footer-location-icon" aria-hidden="true"></span>8 The Green #20190, Dover, DE 19901</p>
          <p><img src="/assets/icons/clock.svg" alt="">Mon - Fri 08.00 AM - 04:00 PM</p>
          <p><img src="/assets/icons/phone.svg" alt="">+1 302 565 1600</p>
          <p><img src="/assets/icons/mail.svg" alt=""><a href="mailto:info@milestonetech.net">info@milestonetech.net</a></p>
        </section>
        <section>
          <h3>Quick Links</h3>
          <div class="footer-links">${[["Testimonials", "/testimonials1/"], ["Blogs", "/blogs/"], ["Careers", "/careers-page/"], ["Case Study", "/case-study/"], ["Privacy Policy", "/privacy-policy/"], ["Awards & Recognitions", "/company-overview/awards-recognitions/"], ["Terms & Conditions", "/terms-and-conditions/"], ["Data Security & Confidentiality", "/data-security-confidentiality/"], ["FAQs", "/faq/"]].map(link).join("")}</div>
        </section>
        <section>
          <h3>Recent Posts</h3>
          <div class="footer-links">${footerRecentPosts()}</div>
        </section>
        <section>
          <h3>Search</h3>
          <form class="search-form" role="search"><label><span class="sr-only">Search</span><input type="search" placeholder="Search..."></label><button type="submit" aria-label="Search">Search</button></form>
        </section>
      </div>
      <div class="copyright">&copy; 2026 Milestone PLM Solutions Pvt Ltd. All Rights Reserved.</div>
    </footer>
  `;
}
