import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Privacy Policy | Bevory" description="Bevory's privacy policy — how we collect, use, and protect your data." />
    <Header />
    <main className="px-4 py-8 max-w-3xl mx-auto prose prose-sm dark:prose-invert">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground text-xs mb-4">Last updated: 20 September 2026</p>

      <h2>1. Information We Collect</h2>
      <p>We collect information you choose to provide, such as your name, email address, phone number, selected city, reviews, support messages, and account preferences. Our hosting and security providers may process technical records such as IP address, browser details, request time, and security events. Optional Google Analytics data is collected only after you allow analytics.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide, maintain, and improve our services</li>
        <li>To personalise your experience, including city-based pricing</li>
        <li>To send notifications, updates, and promotional communications (with your consent)</li>
        <li>To detect, prevent, and address technical issues or fraud</li>
      </ul>

      <h2>3. Legal Basis and Consent</h2>
      <p>We process data to provide services you request, protect the service, comply with law, and for purposes you consent to. You may withdraw optional analytics consent at any time using the Privacy choices link in the website footer. Withdrawal does not affect processing already completed before withdrawal.</p>

      <h2>4. Storage, Cookies and Analytics</h2>
      <p>Necessary browser storage remembers age confirmation, city selection, authentication, and privacy choices. It is required for the features you request. Google Analytics remains disabled by default and is loaded only after you select Allow analytics. Advertising storage, advertising user data, and ad personalisation remain disabled.</p>

      <h2>5. Service Providers and Sharing</h2>
      <p>We do not sell personal data. We use service providers including Cloudflare for delivery and security, Amazon Web Services for application, database, and object storage, and Google only for features you choose, such as sign-in or consented analytics. Providers process data under their own contractual and legal obligations. We may disclose information when required by law or necessary to protect users and the service.</p>

      <h2>6. Retention and Security</h2>
      <p>We retain personal data only while it is reasonably needed for the stated purpose, account operation, security, dispute resolution, or legal obligations. We use encrypted connections, access controls, managed infrastructure, backups, and restricted production access. No online system can guarantee absolute security.</p>

      <h2>7. Your Rights and Choices</h2>
      <p>Subject to applicable law, you may ask for a summary of your personal data, correction, completion, erasure, consent withdrawal, or grievance redressal, and may nominate another person to exercise applicable rights. Account information can be updated in your profile. For access or deletion requests, email <a href="mailto:bevory.main@gmail.com" className="text-primary">bevory.main@gmail.com</a>. We may verify your identity before completing a request.</p>

      <h2>8. Children's Privacy</h2>
      <p>Bevory is intended for adults aged 25 or older who meet their local legal drinking-age requirements. We do not knowingly collect data from minors.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this policy from time to time. We will notify you of significant changes via email or in-app notification.</p>

      <h2>10. Contact and Grievances</h2>
      <p>For privacy questions, rights requests, or grievances, contact Bevory at <a href="mailto:bevory.main@gmail.com" className="text-primary">bevory.main@gmail.com</a> or +91 8010321712. Location: Delhi, India.</p>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
