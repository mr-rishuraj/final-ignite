import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for IGNITE 2026 — organized by PIEDS × BITS Pilani.',
  alternates: { canonical: 'https://ignite.pieds-st.in/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Legal &amp; Compliance</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: September 2026</p>

          <div className={styles.content}>
            <p>
              At IGNITE 2026 (an initiative organized by PIEDS — Pilani Innovation &amp; Entrepreneurship
              Development Society at BITS Pilani), we respect your privacy and are committed to protecting the
              personal information you share with us.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you apply, register as a delegate, or submit inquiries for IGNITE 2026, we collect information
              including your name, email address, phone number, startup details, and pitch deck materials.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use your information exclusively to:</p>
            <ul>
              <li>Process and evaluate startup applications and delegate registrations.</li>
              <li>Communicate event schedules, updates, and logistics.</li>
              <li>Connect shortlisted founders with relevant investors, judges, and mentors.</li>
              <li>Comply with regulatory and institutional compliance standards.</li>
            </ul>

            <h2>Data Protection &amp; Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. Relevant application data is shared solely
              with our evaluation panel, jury members, and verified investors participating in the IGNITE summit.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact our team at{' '}
              <strong>ignite@pieds-bitspilani.org</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
