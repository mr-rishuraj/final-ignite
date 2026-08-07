import siteContent from '@/data/siteContent';
import styles from './InvestorValue.module.css';

export default function InvestorValue() {
  const { investorValue } = siteContent;

  return (
    <section id="investor-value" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>{investorValue.label}</p>
          <h2 className={styles.title}>{investorValue.title} <em>{investorValue.titleAccent}</em></h2>
          <p className={styles.description}>{investorValue.description}</p>
        </div>

        <div className={styles.grid}>
          {investorValue.benefits.map((benefit, i) => (
            <div key={i} className={styles.card}>
              <img src={benefit.icon} alt="" className={styles.icon} />
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
