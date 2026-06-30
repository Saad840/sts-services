import { asset, jobs, testimonials } from "../../data/index.js";
import { pageHero } from "../../components/page-title-hero.js";
import { sidebar } from "../../components/service-layout.js";

export function contactPage() {
  const officeCards = [
    ["USA", "8 The Green #20190, Dover,<br>DE 19901", "+1 302 565 1600", "info@milestonetech.net"],
    ["INDIA", "202 Siddhashram CHS, Next to Ishan Arcade. Gokhale Road, Thane West - 400602. Maharashtra. IN", "+91-8828427555", "info@milestonetech.net"],
    ["UK", "Davidson House, Forbury Square, Reading RG1 3EU, United Kingdom", "+44 746 216 0012", "info@milestonetech.net"]
  ];
  return `
    <main id="main" class="contact-page">
      <section class="contact-main-section">
        <div class="container contact-top-grid">
          <section class="contact-copy">
            <h1>WHY TO CHOOSE US</h1>
            <p>At Milestone PLM Solutions, we are your trusted partner for Engineering and BIM Services. With an unwavering commitment to innovation and a profound grasp of cutting-edge AI tools and technology, we provide bespoke solutions that drive the success of your construction and engineering endeavors. Our seasoned team, unwavering dedication to reliability, and client-centered approach ensure the flawless, on-time, and on-budget execution of your projects.</p>
            <p>Choose Milestone PLM Solutions to experience excellence in engineering solutions, where expertise meets innovation to create a future of limitless possibilities for your projects. We focus on providing best services to our clients. Join hands with us and let's build a brighter, technologically advanced tomorrow together.</p>
          </section>
          <section class="contact-form-column">
            ${quoteForm()}
          </section>
        </div>
        <div class="container contact-offices">
          <h2>Our Offices</h2>
          <div class="office-cards">
            ${officeCards.map(([name, address, phone, email]) => `<article>
              <h3>${name}</h3>
              <ul>
                <li class="office-address">${address}</li>
                <li><a href="tel:${phone.replace(/[^+\d]/g, "")}">${phone}</a></li>
                <li><a href="mailto:${email}">${email}</a></li>
              </ul>
              <div class="office-socials" aria-label="${name} social links"><span>f</span><span>t</span><span>in</span></div>
            </article>`).join("")}
          </div>
          <iframe class="contact-map" src="https://www.google.com/maps/d/embed?mid=1EABWMgWnGWgI41BmQy7FFxMQ0Zz0OcQ&ehbc=2E312F" width="640" height="480" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Our Offices Location"></iframe>
        </div>
      </section>
    </main>`;
}

export function quoteForm() {
  return `<form class="quote-form" aria-label="Request a quote" data-contact-form>
    <h2>Request a Quote</h2>
    <p>This form is only for business inquiries. If you are looking for a life-changing job opportunity, please contact us at <a href="mailto:hr@milestonetech.net">hr@milestonetech.net</a></p>
    <div class="contact-form-fields">
      <label><span class="sr-only">Full Name</span><input name="name" aria-label="Full Name" placeholder="Full Name *" autocomplete="name" required></label>
      <label><span class="sr-only">Project Duration</span><select name="duration" aria-label="Project Duration" required><option value="">Project Duration</option><option>1 to 3 months</option><option>3 to 6 months</option><option>6 to 12 months</option><option>more then 1 year</option><option>Not sure</option></select></label>
      <label><span class="sr-only">Business email</span><input name="email" aria-label="Business email" type="email" placeholder="Business email *" autocomplete="email" required></label>
      <label><span class="sr-only">Company size</span><select name="companySize" aria-label="Company size"><option value="">company size</option><option>Less then 5 Employees</option><option>6 to 10 Employees</option><option>11 to 50 Employees</option><option>50 to 100 Employees</option><option>More then 100</option><option>Not Sure</option></select></label>
      <label><span class="sr-only">Phone</span><input name="phone" aria-label="Phone" placeholder="Phone *" autocomplete="tel" required></label>
      <label><span class="sr-only">Website</span><input name="company" aria-label="Website" placeholder="website *" autocomplete="url"></label>
      <label class="message-field"><span class="sr-only">Message</span><textarea name="message" aria-label="Message" placeholder="Your Message *" required></textarea></label>
      <div class="captcha-placeholder"><span></span><strong>I'm not a robot</strong><small>reCAPTCHA</small></div>
    </div>
    <fieldset><legend>How would you like to be connected</legend><label><input type="checkbox" name="connect" value="Call" checked> Call</label><label><input type="checkbox" name="connect" value="Email"> Email</label><label><input type="checkbox" name="connect" value="Text"> Text</label></fieldset>
    <label class="consent"><input name="consent" type="checkbox" value="Yes"> By clicking this checkbox, you consent to receive marketing and non-marketing texts from Milestone PLM Solutions at the mobile number provided.</label>
    <button class="btn" type="submit">submit</button>
    <p class="form-note" data-form-note aria-live="polite"></p>
  </form>`;
}

export function careersPage() {
  const benefits = [
    "Accidental Insurance and Mediclaim cover",
    "Paid Time Off (PTO)",
    "Work-Life Balance (Five-Day Work Culture)",
    "Cultural Events & Celebrations",
    "Wellness Programs",
    "Professional Development",
    "Employee Recognition Programs",
    "Industry Standard Appraisal",
    "Employee Feedback and Communication Channels"
  ];
  return `
    <main id="main" class="careers-page">
      <section class="careers-open-section">
        <div class="container careers">
          <h2>Open Positions</h2>
          <div class="careers-job-list">
            ${jobs.map(([title, loc, dept, date, href]) => `<article>
              <h3><a href="${href}">${title}</a></h3>
              <p>${loc}</p>
              <span>${dept}</span>
              <footer><a class="careers-read-more" href="${href}">Read more</a><time>${date}</time></footer>
            </article>`).join("")}
          </div>
        </div>
      </section>
      <section class="careers-join-section">
        <div class="container careers-join-grid">
          <div class="careers-copy">
            <h2>Join Our Team</h2>
            <h3>CAREERS</h3>
            <p>At Milestone PLM Solutions, we understand the complexities of balancing work and personal responsibilities. That's why we offer comprehensive benefits and ensuring our employees can focus on their work without distraction. In addition to acquiring valuable experience and skills, your journey with us will be as enjoyable as can be.</p>
            <p><strong>Employee Benefits :</strong></p>
            <ul class="check-list careers-benefits">${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div class="careers-image">
            <img src="/assets/images/company/careers-we-are-hiring-banner.webp" alt="We Are Hiring" loading="lazy">
          </div>
        </div>
      </section>
    </main>`;
}

export function jobDetailPage(job) {
  const [title, location, department, date] = job;
  return `${pageHero(title)}
    <main id="main" class="section career-detail-page">
      <div class="container content-with-sidebar">
        ${sidebar()}
        <article class="content career-detail">
          <p class="career-detail-type">Career Opportunity</p>
          <h2>${title}</h2>
          <dl class="career-detail-meta">
            <div><dt>Location</dt><dd>${location}</dd></div>
            <div><dt>Department</dt><dd>${department}</dd></div>
            <div><dt>Posted</dt><dd>${date}</dd></div>
          </dl>
          <h3>About the role</h3>
          <p>Milestone PLM Solutions is looking for a skilled ${title} to join our growing team. The role supports collaborative delivery, quality-focused execution, and clear communication across client projects.</p>
          <h3>What we look for</h3>
          <ul class="check-list">
            <li>Relevant experience and technical knowledge for the position</li>
            <li>Strong communication, ownership, and attention to detail</li>
            <li>Ability to work effectively with multidisciplinary teams</li>
            <li>Commitment to quality, schedules, and continuous learning</li>
          </ul>
          <a class="btn career-apply" href="mailto:hr@milestonetech.net?subject=${encodeURIComponent(`Application for ${title}`)}">Apply for this position</a>
        </article>
      </div>
    </main>`;
}

export function testimonialsPage() {
  return `
    <main id="main" class="testimonials-page">
      <section class="testimonials-list-section">
        <div class="container testimonials-list-grid">
          ${testimonials.map(([name, role, quote]) => `<article class="testimonial-page-card">
            <p>${quote}</p>
            <div>
              <img src="${asset("2018/10/placeholder-6-50x50.gif")}" alt="">
              <strong>${name}</strong>
              <span>${role}</span>
            </div>
          </article>`).join("")}
        </div>
      </section>
    </main>`;
}
