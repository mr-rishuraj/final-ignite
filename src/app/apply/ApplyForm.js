'use client';

import { useState } from 'react';
import styles from './apply.module.css';

const STAGES = ['Idea', 'Prototype / MVP', 'Early Revenue', 'Growth Stage', 'Scaling'];
const SECTORS = [
  'Fintech', 'Healthtech', 'Edtech', 'SaaS / B2B', 'AI / ML',
  'CleanTech / Sustainability', 'D2C / Consumer', 'DeepTech', 'Other',
];
const SOURCES = ['Social Media', 'BITS Pilani Network', 'Friend / Colleague', 'Email', 'Other'];

const EMPTY = {
  founderName: '', email: '', phone: '',
  startupName: '', stage: '', sector: '',
  oneLiner: '', website: '', source: '',
};

export default function ApplyForm() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.founderName.trim()) e.founderName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.startupName.trim()) e.startupName = 'Required';
    if (!form.stage) e.stage = 'Required';
    if (!form.sector) e.sector = 'Required';
    if (!form.oneLiner.trim()) e.oneLiner = 'Required';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successInner}>
          <div className={styles.successIcon} aria-hidden="true">✦</div>
          <h1 className={styles.successTitle}>Application received.</h1>
          <p className={styles.successBody}>
            Thanks, <strong>{form.founderName}</strong>. We&apos;ve got your application
            for <strong>{form.startupName}</strong> and will be in touch at{' '}
            <strong>{form.email}</strong> soon.
          </p>
          <a href="/" className={styles.successBack}>← Back to home</a>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      <aside className={styles.left}>
        <div className={styles.leftInner}>
          <span className={styles.eyebrow}>IGNITE 2026 · Dubai</span>
          <h1 className={styles.heading}>
            Apply to<br /><em className={styles.accent}>IGNITE.</em>
          </h1>
          <p className={styles.subtext}>
            Join 100+ founders, investors, and innovators at the global startup summit
            by PIEDS × BITS Pilani. Tell us about your startup and we&apos;ll be in touch.
          </p>
          <ul className={styles.perks}>
            <li><span className={styles.perkDot} />Access to world-class mentors</li>
            <li><span className={styles.perkDot} />Curated investor meetings</li>
            <li><span className={styles.perkDot} />Stage time &amp; brand visibility</li>
            <li><span className={styles.perkDot} />Dubai, 2026</li>
          </ul>
        </div>
      </aside>

      <section className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <p className={styles.formNote}>
            Fields marked <span className={styles.req}>*</span> are required.
          </p>

          <div className={styles.row}>
            <Field label="Founder Name" error={errors.founderName} required>
              <input
                className={`${styles.input} ${errors.founderName ? styles.inputError : ''}`}
                type="text" placeholder="Your full name"
                value={form.founderName} onChange={set('founderName')}
              />
            </Field>
            <Field label="Email" error={errors.email} required>
              <input
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                type="email" placeholder="you@startup.com"
                value={form.email} onChange={set('email')}
              />
            </Field>
          </div>

          <div className={styles.row}>
            <Field label="Startup Name" error={errors.startupName} required>
              <input
                className={`${styles.input} ${errors.startupName ? styles.inputError : ''}`}
                type="text" placeholder="Your company name"
                value={form.startupName} onChange={set('startupName')}
              />
            </Field>
            <Field label="Phone" hint="Optional">
              <input
                className={styles.input} type="tel" placeholder="+971 ···"
                value={form.phone} onChange={set('phone')}
              />
            </Field>
          </div>

          <div className={styles.row}>
            <Field label="Startup Stage" error={errors.stage} required>
              <select
                className={`${styles.input} ${styles.select} ${errors.stage ? styles.inputError : ''}`}
                value={form.stage} onChange={set('stage')}
              >
                <option value="">Select stage</option>
                {STAGES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="Sector" error={errors.sector} required>
              <select
                className={`${styles.input} ${styles.select} ${errors.sector ? styles.inputError : ''}`}
                value={form.sector} onChange={set('sector')}
              >
                <option value="">Select sector</option>
                {SECTORS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </div>

          <Field label="What does your startup do?" error={errors.oneLiner} required>
            <textarea
              className={`${styles.input} ${styles.textarea} ${errors.oneLiner ? styles.inputError : ''}`}
              rows={3} placeholder="One sentence that captures your product and who it's for."
              value={form.oneLiner} onChange={set('oneLiner')}
            />
          </Field>

          <div className={styles.row}>
            <Field label="Website / LinkedIn" hint="Optional">
              <input
                className={styles.input} type="url" placeholder="https://"
                value={form.website} onChange={set('website')}
              />
            </Field>
            <Field label="How did you hear about us?" hint="Optional">
              <select
                className={`${styles.input} ${styles.select}`}
                value={form.source} onChange={set('source')}
              >
                <option value="">Select one</option>
                {SOURCES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </div>

          <button type="submit" className={styles.submit}>
            Submit Application
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </section>
    </main>
  );
}

function Field({ label, error, hint, required, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.req}> *</span>}
        {hint && <span className={styles.hint}> — {hint}</span>}
      </label>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
