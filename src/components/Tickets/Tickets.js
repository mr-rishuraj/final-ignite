import siteContent from '@/data/siteContent';
import styles from './Tickets.module.css';

export default function Tickets() {
  const { tickets } = siteContent;

  return (
    <section id="tickets" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>{tickets.label}</span>
          <h2 className={styles.sectionTitle}>
            {tickets.title}{' '}
            <span className={styles.titleAccent}>{tickets.titleAccent}</span>
          </h2>
          <p className={styles.description}>{tickets.description}</p>
        </div>

        <div className={styles.grid}>
          {tickets.plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`}
            >
              {plan.featured && (
                <span className={styles.popularBadge}>Most Popular</span>
              )}
              <img src={plan.icon} alt={plan.name} className={styles.cardIcon} loading="lazy" />
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>{plan.price}</div>
              <p className={styles.planDesc}>{plan.description}</p>

              <ul className={styles.features}>
                {plan.features.map((feature, j) => (
                  <li key={j} className={styles.feature}>
                    <svg className={styles.checkmark} width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3 3 7-7" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`${styles.ctaButton} ${plan.featured ? styles.ctaButtonFeatured : ''}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
