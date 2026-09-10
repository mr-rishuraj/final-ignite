import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Code of Conduct',
  description: 'Code of conduct and community guidelines for attendees, founders, and investors at IGNITE 2026.',
  alternates: { canonical: 'https://ignite.pieds-st.in/code-of-conduct' },
};

export default function CodeOfConductPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Community Standards</span>
          <h1 className={styles.title}>Code of Conduct</h1>
          <p className={styles.updated}>Last updated: September 2026</p>

          <div className={styles.content}>
            <p>
              IGNITE is committed to providing a harassment-free, collaborative, and inclusive experience for
              everyone, regardless of gender, sexual orientation, disability, physical appearance, race, or religion.
            </p>

            <h2>Expected Behavior</h2>
            <ul>
              <li>Treat all attendees, judges, speakers, and organizers with respect and professionalism.</li>
              <li>Encourage constructive feedback and supportive dialogue during pitching and networking sessions.</li>
              <li>Respect confidentiality where requested by participating founders and investors.</li>
            </ul>

            <h2>Unacceptable Behavior</h2>
            <p>
              Harassment, intimidation, disruptive behavior, or unethical pitch practices will not be tolerated.
              Organizers reserve the right to revoke summit access without refund for violations.
            </p>

            <h2>Reporting Incidents</h2>
            <p>
              If you experience or witness unacceptable behavior, please notify an IGNITE team member or email us
              immediately at <strong>ignite@pieds-bitspilani.org</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
