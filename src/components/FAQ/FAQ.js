import Link from 'next/link';
import { FAQ_ITEMS } from '@/data/faqData';
import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Frequently Asked Questions</div>
          <h2 id="faq-heading" className={styles.title}>
            Everything you need to <em>know.</em>
          </h2>
        </div>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, index) => (
            <details key={item.question} className={styles.item} open={index === 0}>
              <summary className={styles.summary}>
                <span>{item.question}</span>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className={styles.body}>
                <p>
                  {item.answer.includes('https://ignite.pieds-st.in/apply') ? (
                    <>
                      You can apply to IGNITE 2026 through the official{' '}
                      <Link href="/apply">application form</Link>. Selected startups receive
                      equity-free grants, investor access, and global exposure.
                    </>
                  ) : (
                    item.answer
                  )}
                </p>
              </div>
            </details>
          ))}
        </div>

        <p className={styles.footerNote}>
          Have more questions?
          <a href="mailto:ignite@pieds-bitspilani.org" className={styles.footerLink}>
            Get in touch with the IGNITE team →
          </a>
        </p>
      </div>
    </section>
  );
}
