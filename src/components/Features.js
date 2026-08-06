import styles from './Features.module.css';
import siteContent from '@/data/siteContent';

export default function Features() {
  const { about } = siteContent;
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>{about.label}</div>
          <div className={styles.headerTop}>
            <h2 className={styles.title}>{about.title} <em>{about.titleAccent}</em></h2>
            <p className={styles.desc}>{about.description}</p>
          </div>
          <div className={styles.lede}>
            {about.lede.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
        <div className={styles.grid}>
          {about.audiences.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.number}>0{i+1}</div>
              <img src={item.icon} alt="" className={styles.icon} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
