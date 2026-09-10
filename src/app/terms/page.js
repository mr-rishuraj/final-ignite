import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and participation guidelines for IGNITE 2026 Dubai.',
  alternates: { canonical: 'https://ignite.pieds-st.in/terms' },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Terms &amp; Conditions</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: September 2026</p>

          <div className={styles.content}>
            <p>
              Welcome to IGNITE 2026. By submitting an application, purchasing a pass, or attending the summit
              at the BITS Pilani Dubai Campus, you agree to these Terms of Service.
            </p>

            <h2>Applications &amp; Selection</h2>
            <p>
              Submission of an application does not guarantee selection, funding, or grant allocation. All applications
              undergo rigorous, independent evaluation by the PIEDS screening committee. Decisions made by the selection
              committee and jury panels are final.
            </p>

            <h2>Grants &amp; Equity-Free Funding</h2>
            <p>
              Any grants disbursed are subject to institutional verification, milestone achievement, and relevant regulatory
              approvals under applicable startup incubation schemes managed by PIEDS.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Founders retain full ownership of their intellectual property, product ideas, and proprietary technology
              shared during IGNITE pitches and workshops.
            </p>

            <h2>Contact</h2>
            <p>
              For legal inquiries or clarifications regarding these terms, reach us at{' '}
              <strong>ignite@pieds-bitspilani.org</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
