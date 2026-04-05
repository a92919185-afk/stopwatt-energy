#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ─── Config ────────────────────────────────────────────────
const DIRS = {
  templates: path.join(__dirname, 'templates'),
  blocks:    path.join(__dirname, 'blocks'),
  styles:    path.join(__dirname, 'styles'),
  data:      path.join(__dirname, 'data'),
  output:    path.join(__dirname, 'output'),
};

// ─── Helpers ───────────────────────────────────────────────

function loadFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function replacePlaceholders(template, data, prefix = '') {
  let result = template;

  for (const [key, value] of Object.entries(data)) {
    const placeholder = prefix ? `{{${prefix}.${key}}}` : `{{${key}}}`;

    if (typeof value === 'string' || typeof value === 'number') {
      result = result.split(placeholder).join(String(value));
    }
  }

  return result;
}

function processTemplate(html, data) {
  // Process all {{#each key}}...{{/each}} blocks (supports nesting)
  let result = html;
  let safety = 0;

  // Keep processing until no more {{#each}} remain (handles nesting)
  while (result.includes('{{#each') && safety < 10) {
    safety++;
    // Match innermost {{#each}} first (no nested {{#each}} inside)
    result = result.replace(
      /{{#each\s+(\w+)}}((?:(?!{{#each)[\s\S])*?){{\/each}}/g,
      (_, key, innerTemplate) => {
        const items = data[key];
        if (!Array.isArray(items)) return '';
        return items.map(item => {
          if (typeof item === 'string') {
            return innerTemplate.replace(/{{this}}/g, item);
          }
          // Recursively process nested each-loops inside item
          let rendered = processTemplate(innerTemplate, item);
          rendered = replacePlaceholders(rendered, item);
          return rendered;
        }).join('\n');
      }
    );
  }

  return result;
}

function renderConditional(html, data) {
  // {{#if key}}...{{/if}}
  return html.replace(/{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g, (_, key, content) => {
    return data[key] ? content : '';
  });
}

// ─── Block Renderer ────────────────────────────────────────

function renderBlock(blockName, data) {
  const blockPath = path.join(DIRS.blocks, `${blockName}.html`);
  if (!fs.existsSync(blockPath)) {
    console.warn(`  ⚠ Block not found: ${blockName}.html — skipping`);
    return '';
  }

  let html = loadFile(blockPath);

  // Process each-loops (supports nesting)
  html = processTemplate(html, data);

  // Process conditionals
  html = renderConditional(html, data);

  // Replace simple placeholders
  html = replacePlaceholders(html, data);

  return html;
}

// ─── Complete Modals Generator (Google Ads Compliant) ──────

function generateCompleteModals(data) {
  const productName = data.product_name || 'Product';
  const companyName = data.company_name || 'Company Inc.';
  const supportEmail = data.support_email || 'support@example.com';
  const supportPhone = data.support_phone || '1-800-000-0000';
  const year = data.year || '2026';
  const companyAddress = data.company_address || '1234 Commerce Drive, Suite 200, Miami, FL 33101';
  
  return `
<!-- Privacy Policy Modal -->
<div id="modal-privacy" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-privacy-title">
  <div class="modal-drawer">
    <button class="modal-close" onclick="closeModal('privacy')" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h2 id="modal-privacy-title">Privacy Policy</h2>
    <p style="color: #374151; margin-bottom: 20px;"><strong>Effective Date:</strong> March 31, ${year}</p>
    <p style="color: #374151; margin-bottom: 20px;">This Privacy Policy explains how <strong>${companyName}</strong> ("we", "us", or "our") collects, uses, and protects your personal information when you visit this website.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">1. Information We Collect</h3>
    <p style="color: #374151; margin-bottom: 12px;">We collect information you provide directly and automatically:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Personal Information:</strong> Name, email address, billing/shipping address, phone number, and payment information when you place an order.</li>
      <li style="margin-bottom: 8px;"><strong>Automatically Collected:</strong> IP address, browser type, device information, pages visited, time spent on pages, referring URLs, and cookies.</li>
      <li style="margin-bottom: 8px;"><strong>Purchase History:</strong> Products ordered, order dates, amounts paid, and shipping details.</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">2. How We Use Your Information</h3>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Process and fulfill your orders, including payment processing and shipping</li>
      <li style="margin-bottom: 8px;">Communicate order status, shipping updates, and respond to inquiries</li>
      <li style="margin-bottom: 8px;">Provide customer support and resolve any issues</li>
      <li style="margin-bottom: 8px;">Send promotional emails and marketing communications (you may unsubscribe anytime)</li>
      <li style="margin-bottom: 8px;">Analyze website traffic and improve user experience</li>
      <li style="margin-bottom: 8px;">Comply with legal obligations and prevent fraud</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">3. Cookies and Tracking Technologies</h3>
    <p style="color: #374151; margin-bottom: 12px;">We use cookies and similar technologies including:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Google Analytics:</strong> For traffic analysis and website optimization (data is anonymized)</li>
      <li style="margin-bottom: 8px;"><strong>Meta Pixel (Facebook):</strong> For advertising retargeting and campaign measurement</li>
      <li style="margin-bottom: 8px;"><strong>Session Cookies:</strong> To maintain your shopping cart and login status</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">4. Third-Party Data Sharing</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>We do NOT sell, rent, or trade your personal data.</strong> We only share data with:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Payment Processors:</strong> To securely process your transactions</li>
      <li style="margin-bottom: 8px;"><strong>Shipping Providers:</strong> To deliver your orders (USPS, UPS, FedEx)</li>
      <li style="margin-bottom: 8px;"><strong>Analytics Providers:</strong> Google Analytics (anonymized data only)</li>
      <li style="margin-bottom: 8px;"><strong>Advertising Platforms:</strong> Meta and Google (for retargeting, using hashed data only)</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">5. Data Retention</h3>
    <p style="color: #374151; margin-bottom: 16px;">We retain personal data for as long as necessary to fulfill orders, comply with legal obligations, and resolve disputes. Transaction records are typically kept for 5-7 years. You may request deletion of your data at any time (subject to legal retention requirements).</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">6. Data Security</h3>
    <p style="color: #374151; margin-bottom: 16px;">All data transmitted between your browser and our server is encrypted using SSL/TLS. We employ industry-standard security practices including access controls and secure server infrastructure. No system is 100% secure, and we cannot guarantee absolute security.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">7. Your Rights</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>US Residents (CCPA):</strong> You have the right to know what personal data we collect, request deletion, and opt out of sale (we do not sell data).</p>
    <p style="color: #374151; margin-bottom: 12px;"><strong>EU/UK Residents (GDPR):</strong> You have the right to access, correct, erase, restrict processing, data portability, and object to processing.</p>
    <p style="color: #374151; margin-bottom: 16px;">To exercise any right, email us at ${supportEmail}. We will respond within 30 days.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">8. Children's Privacy</h3>
    <p style="color: #374151; margin-bottom: 16px;">This website is not directed at children under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately for deletion.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">9. Changes to This Policy</h3>
    <p style="color: #374151; margin-bottom: 16px;">We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">10. Contact for Privacy Requests</h3>
    <p style="color: #374151; margin-bottom: 8px;">For privacy-related questions or to exercise your rights:</p>
    <p style="color: #374151; margin-bottom: 8px;">Email: ${supportEmail}</p>
    <p style="color: #374151; margin-bottom: 8px;">Phone: ${supportPhone}</p>
    <p style="color: #374151; margin-bottom: 20px;">Address: ${companyAddress}</p>
    <p style="color: #6b7280; font-size: 0.9rem; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">We respond to all privacy requests within 30 days as required by law.</p>
  </div>
</div>

<!-- Terms of Service Modal -->
<div id="modal-terms" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-terms-title">
  <div class="modal-drawer">
    <button class="modal-close" onclick="closeModal('terms')" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h2 id="modal-terms-title">Terms of Service</h2>
    <p style="color: #374151; margin-bottom: 20px;"><strong>Last Updated:</strong> March 31, ${year}</p>
    <p style="color: #374151; margin-bottom: 20px;">Please read these Terms of Service ("Terms") carefully before using this website. By accessing, browsing, or purchasing from this site, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">1. Independent Distributor Disclosure</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>This website is operated by ${companyName}, an independent authorized distributor of ${productName}.</strong></p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">We are NOT the manufacturer, brand owner, or official representative of ${productName}.</li>
      <li style="margin-bottom: 8px;">All product names, trademarks, and branding belong exclusively to their respective owners.</li>
      <li style="margin-bottom: 8px;">We earn a commission on sales made through affiliate links on this site.</li>
      <li style="margin-bottom: 8px;">This is a material connection as defined by FTC guidelines (16 CFR § 255).</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">2. Acceptance of Terms</h3>
    <p style="color: #374151; margin-bottom: 12px;">By accessing this website, you confirm that:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">You are at least 18 years of age</li>
      <li style="margin-bottom: 8px;">You have read and understood these terms</li>
      <li style="margin-bottom: 8px;">You agree to be legally bound by them</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">3. Age Restriction</h3>
    <p style="color: #374151; margin-bottom: 16px;">This site and its products are intended for adults 18 years of age or older only. By using this site you represent that you are at least 18 years old. We do not knowingly market to or collect information from minors.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">4. No Medical Advice</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>IMPORTANT DISCLAIMER:</strong></p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Nothing on this website constitutes medical advice, diagnosis, or treatment.</li>
      <li style="margin-bottom: 8px;">All content is provided for informational purposes only.</li>
      <li style="margin-bottom: 8px;">Always consult a licensed healthcare professional before starting any new supplement.</li>
      <li style="margin-bottom: 8px;">Statements regarding dietary supplements have not been evaluated by the FDA.</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">5. Product Claims and Results</h3>
    <p style="color: #374151; margin-bottom: 12px;">You acknowledge and agree that:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Product descriptions reflect information provided by the manufacturer.</li>
      <li style="margin-bottom: 8px;">Testimonials and results shown are individual experiences and are NOT typical.</li>
      <li style="margin-bottom: 8px;">Individual results will vary based on diet, exercise, health status, age, and other factors.</li>
      <li style="margin-bottom: 8px;">The products are not intended to diagnose, treat, cure, or prevent any disease.</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">6. Affiliate/Commercial Relationship Disclosure</h3>
    <p style="color: #374151; margin-bottom: 16px;">This website contains affiliate links. When you click a link and make a purchase, we earn a commission at no additional cost to you. This compensation may influence which products we promote. This disclosure is provided in compliance with FTC guidelines (16 CFR § 255).</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">7. Limitation of Liability</h3>
    <p style="color: #374151; margin-bottom: 16px;">To the maximum extent permitted by applicable law, ${companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this site or the products promoted herein. Our total liability shall not exceed the amount you paid for the product giving rise to the claim.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">8. Intellectual Property</h3>
    <p style="color: #374151; margin-bottom: 16px;">All product names, logos, and trademarks displayed on this site belong to their respective owners. The content we create (copy, design elements) is our property. You may not reproduce or republish our original content without written permission.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">9. Governing Law</h3>
    <p style="color: #374151; margin-bottom: 16px;">These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Delaware.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">10. Changes to Terms</h3>
    <p style="color: #374151; margin-bottom: 16px;">We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Your continued use of the site constitutes acceptance of any updated terms.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">11. Contact</h3>
    <p style="color: #374151; margin-bottom: 8px;">Questions about these Terms? Contact us at:</p>
    <p style="color: #374151; margin-bottom: 8px;">Email: ${supportEmail}</p>
    <p style="color: #374151; margin-bottom: 20px;">Phone: ${supportPhone}</p>
    <p style="color: #6b7280; font-size: 0.9rem; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
  </div>
</div>

<!-- Returns & Refunds Modal -->
<div id="modal-returns" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-returns-title">
  <div class="modal-drawer">
    <button class="modal-close" onclick="closeModal('returns')" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h2 id="modal-returns-title">Returns & Refunds Policy</h2>
    <p style="color: #374151; margin-bottom: 20px;"><strong>Effective Date:</strong> March 31, ${year}</p>
    <p style="color: #374151; margin-bottom: 20px;">At ${companyName}, we stand behind the products we promote. Your satisfaction is our priority. Please read our refund policy carefully before placing your order.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">60-Day Money-Back Guarantee</h3>
    <p style="color: #374151; margin-bottom: 12px;">All purchases of ${productName} are covered by our industry-leading <strong>60-day money-back guarantee</strong>.</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">If for any reason you are not completely satisfied, you may request a full refund within 60 days of your purchase date.</li>
      <li style="margin-bottom: 8px;">No questions asked — we make the process simple and hassle-free.</li>
      <li style="margin-bottom: 8px;">Opened and partially used bottles are accepted for refund.</li>
      <li style="margin-bottom: 8px;">The guarantee applies to all package options (1, 3, or 6 bottles).</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">How to Request a Refund</h3>
    <p style="color: #374151; margin-bottom: 12px;">To initiate your refund, follow these simple steps:</p>
    <ol style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Email us</strong> at ${supportEmail} with the subject line "Refund Request"</li>
      <li style="margin-bottom: 8px;"><strong>Include your information:</strong>
        <ul style="margin-top: 8px; padding-left: 20px;">
          <li>Full name used for the order</li>
          <li>Order number (found in your confirmation email)</li>
          <li>Email address used to place the order</li>
          <li>Reason for return (optional, but helps us improve)</li>
        </ul>
      </li>
      <li style="margin-bottom: 8px;"><strong>Wait for confirmation:</strong> You will receive a confirmation and return instructions within 1–2 business days.</li>
      <li style="margin-bottom: 8px;"><strong>Return the product:</strong> Follow the instructions provided in our response.</li>
    </ol>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Refund Eligibility</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>Qualifying Conditions:</strong></p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Request made within 60 days of purchase date</li>
      <li style="margin-bottom: 8px;">Opened and partially used bottles are accepted</li>
      <li style="margin-bottom: 8px;">Empty bottles are accepted (we trust you gave it a fair try)</li>
    </ul>
    <p style="color: #374151; margin-bottom: 12px;"><strong>Non-Refundable Items:</strong></p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Shipping and handling charges (unless the product was defective)</li>
      <li style="margin-bottom: 8px;">Products purchased beyond the 60-day guarantee window</li>
      <li style="margin-bottom: 8px;">Products not purchased through our official affiliate link</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Refund Processing Timeline</h3>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Approval:</strong> Refund requests are typically approved within 1-2 business days of receiving your return.</li>
      <li style="margin-bottom: 8px;"><strong>Processing:</strong> Once approved, refunds are processed within 5-10 business days.</li>
      <li style="margin-bottom: 8px;"><strong>Bank Processing:</strong> Please allow an additional 3-5 business days for your bank or credit card issuer to reflect the credit on your statement.</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Damaged or Incorrect Items</h3>
    <p style="color: #374151; margin-bottom: 12px;">If you receive a damaged, defective, or incorrect item:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Contact us immediately (within 7 days of delivery)</li>
      <li style="margin-bottom: 8px;">Include photos of the damaged item and packaging</li>
      <li style="margin-bottom: 8px;">We will arrange for a free replacement or full refund at no cost to you</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Important Notice</h3>
    <p style="color: #374151; margin-bottom: 16px;">To ensure your order qualifies for the full money-back guarantee, always purchase through the official product link on this page. Third-party marketplace purchases may not be covered by the same guarantee terms.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Contact Us</h3>
    <p style="color: #374151; margin-bottom: 8px;">For any return or refund questions:</p>
    <p style="color: #374151; margin-bottom: 8px;">Email: ${supportEmail}</p>
    <p style="color: #374151; margin-bottom: 8px;">Phone: ${supportPhone}</p>
    <p style="color: #374151; margin-bottom: 20px;">Address: ${companyAddress}</p>
    <p style="color: #6b7280; font-size: 0.9rem; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">We value your business and are committed to making your return experience as smooth as possible.</p>
  </div>
</div>

<!-- Contact Us Modal -->
<div id="modal-contact" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-contact-title">
  <div class="modal-drawer">
    <button class="modal-close" onclick="closeModal('contact')" aria-label="Close">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <h2 id="modal-contact-title">Contact Us</h2>
    <p style="color: #374151; margin-bottom: 20px;">We value our customers and are here to help with any questions, concerns, or feedback. Our dedicated support team is ready to assist you.</p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Customer Support</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>Email Support (Recommended)</strong></p>
    <p style="color: #374151; margin-bottom: 16px;">For general inquiries, orders, refunds, and technical support:<br><strong>${supportEmail}</strong></p>
    <p style="color: #374151; margin-bottom: 16px;">We aim to respond to all emails within 1-2 business days. For faster service, please include your order number if applicable.</p>

    <p style="color: #374151; margin-bottom: 12px;"><strong>Phone Support</strong></p>
    <p style="color: #374151; margin-bottom: 8px;">Toll-free: <strong>${supportPhone}</strong></p>
    <p style="color: #374151; margin-bottom: 16px;">Available Monday-Friday, 9:00 AM - 5:00 PM Eastern Time (EST)</p>
    <p style="color: #374151; margin-bottom: 16px;"><em>Note: We are closed on weekends and major US holidays.</em></p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Mailing Address</h3>
    <p style="color: #374151; margin-bottom: 8px;"><strong>${companyName}</strong></p>
    <p style="color: #374151; margin-bottom: 16px;">${companyAddress}</p>
    <p style="color: #374151; margin-bottom: 16px;"><em>Please note: This is our administrative office. Returns should be sent to the address provided in your return authorization email only.</em></p>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Order Inquiries</h3>
    <p style="color: #374151; margin-bottom: 12px;">When contacting us about an order, please include:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Your order number (found in your confirmation email)</li>
      <li style="margin-bottom: 8px;">The email address used to place the order</li>
      <li style="margin-bottom: 8px;">A brief description of your inquiry</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Refund Requests</h3>
    <p style="color: #374151; margin-bottom: 12px;">For refund and return inquiries:</p>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;">Email: ${supportEmail}</li>
      <li style="margin-bottom: 8px;">Subject line: "Refund Request - Order #[Your Order Number]"</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Response Time Commitment</h3>
    <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Email:</strong> Within 1-2 business days</li>
      <li style="margin-bottom: 8px;"><strong>Phone:</strong> Immediate during business hours</li>
      <li style="margin-bottom: 8px;"><strong>Refund Requests:</strong> Within 1 business day</li>
    </ul>

    <h3 style="color: #111827; margin-top: 24px; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">About This Website</h3>
    <p style="color: #374151; margin-bottom: 12px;"><strong>Independent Distributor</strong></p>
    <p style="color: #374151; margin-bottom: 16px;">This website is operated by ${companyName}, an independent authorized distributor of ${productName}. We are not the manufacturer.</p>

    <p style="color: #6b7280; font-size: 0.9rem; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">We appreciate your business and look forward to helping you achieve your health goals!</p>
  </div>
</div>
`;
}

// ─── Main Generator ───────────────────────────────────────

function generate(dataSlug) {
  // 1. Load JSON data
  const dataPath = path.join(DIRS.data, `${dataSlug}.json`);
  if (!fs.existsSync(dataPath)) {
    console.error(`✗ Data file not found: ${dataPath}`);
    process.exit(1);
  }

  let data = JSON.parse(loadFile(dataPath));
  
  console.log(`\n⚡ Generating page for: ${data.product_name || dataSlug}`);
  console.log(`   Language: ${data.language || 'en'}`);
  console.log(`   Theme: ${data.theme || 'theme.css'}`);

  // 2. Load base template — Model C and D use their own templates
  const baseTemplateFile = data.page_model === 'C' ? 'base-c.html' : data.page_model === 'D' ? 'base-d.html' : data.page_model === 'T' ? 'base-t.html' : 'base.html';
  const baseTemplate = loadFile(path.join(DIRS.templates, baseTemplateFile));

  // 3. Block list — per model
  const blocksC = [
    'navbar',
    'promo-banner',
    'hero-c',
    'scientific-refs',
    'trust-c',
    'rating',
    'reviews',
    'product-identity',
    'how-it-works',
    'ingredients-list',
    'guarantee',
    'benefits-list',
    'faq',
    'final-cta',
    'floating-cta',
    'footer',
  ];

  const blocksAB = [
    'alert-bar',
    'navbar',
    'model-b-notice',
    'hero',
    'trust',
    'social-proof',
    'shipping',
    'benefits',
    'features',
    'science',
    'reviews',
    'faq',
    'footer',
  ];

  const blocks = data.page_model === 'C' ? blocksC : data.page_model === 'T' ? [] : blocksAB;

  // 4. Render each block
  const rendered = {};
  for (const block of blocks) {
    const blockKey = block.replace(/-/g, '_');
    const blockData = data[blockKey] || data;
    // Merge top-level data so blocks can access global fields
    const mergedData = { ...data, ...blockData };
    rendered[block] = renderBlock(block, mergedData);
  }

  // 5. Assemble the page
  let page = baseTemplate;

  // Replace block placeholders
  for (const [block, html] of Object.entries(rendered)) {
    page = page.split(`{{block:${block}}}`).join(html);
  }

  // Inject complete Google Ads compliant modals
  const modalsHtml = generateCompleteModals(data);
  page = page.split('{{block:modals}}').join(modalsHtml);

  // Model T: pre-render nested product arrays as HTML strings before processTemplate.
  // Reason: the template engine processes innermost {{#each}} first (flat context = top-level data),
  // so nested arrays inside products (pros, cons, etc.) lose their product context.
  // Pre-rendering them as HTML strings into named fields solves this cleanly.
  if (data.page_model === 'T' && Array.isArray(data.products)) {
    data.products = data.products.map(function(product) {
      var pros_rendered = (product.pros || []).map(function(p) {
        return '<li><i class="fa-solid fa-check" aria-hidden="true"></i> ' + p + '</li>';
      }).join('\n                    ');
      var cons_rendered = (product.cons || []).map(function(c) {
        return '<li><i class="fa-solid fa-xmark" aria-hidden="true"></i> ' + c + '</li>';
      }).join('\n                    ');
      var bottom_line_rendered = (product.bottom_line_paragraphs || []).map(function(p) {
        return '<p>' + p + '</p>';
      }).join('\n                ');
      var survey_items_rendered = (product.survey_items || []).map(function(i) {
        return '<li><strong>' + i + '</strong></li>';
      }).join('\n            ');
      return Object.assign({}, product, { pros_rendered: pros_rendered, cons_rendered: cons_rendered, bottom_line_rendered: bottom_line_rendered, survey_items_rendered: survey_items_rendered });
    });
  }

  // Model T: run template engine on assembled page (self-contained template, no blocks)
  if (data.page_model === 'T') {
    page = processTemplate(page, data);
    page = renderConditional(page, data);
  }

  // Replace global placeholders
  page = replacePlaceholders(page, data);

  // Process conditionals on the final page (for {{#if key}}...{{/if}} in base template)
  page = renderConditional(page, data);

  // Replace theme
  page = page.split('{{theme}}').join(data.theme || 'theme.css');

  // 6. Write output — route to model-a/ model-b/ model-c/ or model-d/ based on page_model field
  const slug = data.slug || dataSlug;
  const modelMap = { 'B': 'model-b', 'C': 'model-c', 'D': 'model-d', 'T': 'model-t' };
  const model = modelMap[data.page_model] || 'model-a';
  const outputDir = path.join(DIRS.output, model, slug);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  console.log(`   Model: ${model}`);

  // Copy theme CSS into output
  const themeFile = data.theme || 'theme.css';
  const stylesOutDir = path.join(outputDir, 'styles');
  if (!fs.existsSync(stylesOutDir)) {
    fs.mkdirSync(stylesOutDir, { recursive: true });
  }
  // Always copy the base theme (needed for @import in variant themes)
  const baseThemeSrc = path.join(DIRS.styles, 'theme.css');
  if (fs.existsSync(baseThemeSrc)) {
    fs.copyFileSync(baseThemeSrc, path.join(stylesOutDir, 'theme.css'));
  }
  // Copy the selected theme if it's not the base
  if (themeFile !== 'theme.css') {
    const themeSrc = path.join(DIRS.styles, themeFile);
    if (fs.existsSync(themeSrc)) {
      fs.copyFileSync(themeSrc, path.join(stylesOutDir, themeFile));
    }
  }
  // Model C: copy model-c-base.css (the structural layer all C themes import)
  if (data.page_model === 'C') {
    const mcBaseSrc = path.join(DIRS.styles, 'model-c-base.css');
    if (fs.existsSync(mcBaseSrc)) {
      fs.copyFileSync(mcBaseSrc, path.join(stylesOutDir, 'model-c-base.css'));
    }
  }
  // Model T: copy model-t-base.css (structural layer all T themes import)
  if (data.page_model === 'T') {
    const mtBaseSrc = path.join(DIRS.styles, 'model-t-base.css');
    if (fs.existsSync(mtBaseSrc)) {
      fs.copyFileSync(mtBaseSrc, path.join(stylesOutDir, 'model-t-base.css'));
    }
  }

  // Create images directory (for product images, reviews, etc.)
  const imagesOutDir = path.join(outputDir, 'images');
  if (!fs.existsSync(imagesOutDir)) {
    fs.mkdirSync(imagesOutDir, { recursive: true });
    console.log(`   Created images directory: ${imagesOutDir}`);
  }

  const outputPath = path.join(outputDir, 'index.html');
  fs.writeFileSync(outputPath, page, 'utf-8');

  console.log(`\n✓ Page generated: ${outputPath}\n`);
}

// ─── CLI ──────────────────────────────────────────────────

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help') {
  console.log(`
  Static HTML Page Generator
  ──────────────────────────
  Usage:
    node generator.js <data-slug>        Generate a single page
    node generator.js --all              Generate all pages from /data

  Examples:
    node generator.js us-reticlear
    node generator.js br-reticlear
    node generator.js --all
  `);
  process.exit(0);
}

if (args[0] === '--all') {
  const files = fs.readdirSync(DIRS.data).filter(f => f.endsWith('.json'));
  if (files.length === 0) {
    console.log('No JSON files found in /data');
    process.exit(0);
  }
  console.log(`\n🔨 Generating ${files.length} page(s)...\n`);
  for (const file of files) {
    const slug = file.replace('.json', '');
    generate(slug);
  }
  console.log(`\n✓ All ${files.length} pages generated!\n`);
} else {
  generate(args[0]);
}
