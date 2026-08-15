'use client';

import { useState, useRef } from 'react';
import styles from './apply.module.css';

const STAGES  = ['Idea', 'Prototype / MVP', 'Early Revenue', 'Growth Stage', 'Scaling'];
const SECTORS = ['Fintech','Healthtech','Edtech','SaaS / B2B','AI / ML','CleanTech / Sustainability','D2C / Consumer','DeepTech','Other'];
const SOURCES = ['Social Media','BITS Pilani Network','Friend / Colleague','Email','Other'];

const STEPS = [
  { num: '01', title: 'About You',     desc: 'Start with the basics — who is behind the startup?' },
  { num: '02', title: 'Your Startup',  desc: 'Tell us what you\'re building and where you are.' },
  { num: '03', title: 'Your Story',    desc: 'The idea, the pitch, and where we can learn more.' },
  { num: '04', title: 'Final Details', desc: 'Review your application before submitting.' },
];

const EMPTY = {
  founderName: '', email: '', phone: '',
  startupName: '', stage: '', sector: '', website: '',
  oneLiner: '', pitchDeck: null,
  source: '',
};

export default function ApplyForm() {
  const [form, setForm]       = useState(EMPTY);
  const [step, setStep]       = useState(0);
  const [dir, setDir]         = useState('forward');
  const [animKey, setAnimKey] = useState(0);
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [submitError, setSubmitError] = useState('');
  const fileRef = useRef(null);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  function validateStep(s) {
    const e = {};
    if (s === 0) {
      if (!form.founderName.trim()) e.founderName = 'Required';
      if (!form.email.trim()) e.email = 'Required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    }
    if (s === 1) {
      if (!form.startupName.trim()) e.startupName = 'Required';
      if (!form.stage)  e.stage  = 'Required';
      if (!form.sector) e.sector = 'Required';
    }
    if (s === 2) {
      if (!form.oneLiner.trim()) e.oneLiner = 'Required';
    }
    return e;
  }

  function goNext() {
    const errs = validateStep(step);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setDir('forward');
    setAnimKey((k) => k + 1);
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrors({});
    setDir('backward');
    setAnimKey((k) => k + 1);
    setStep((s) => s - 1);
  }

  function handleFile(file) {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setErrors((e) => ({ ...e, pitchDeck: 'Please upload a PDF file' }));
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setErrors((e) => ({ ...e, pitchDeck: 'File must be under 20 MB' }));
      return;
    }
    setErrors((e) => { const n = { ...e }; delete n.pitchDeck; return n; });
    setForm((f) => ({ ...f, pitchDeck: file }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError('');
    setLoading(true);

    const data = new FormData();
    data.append('founderName',  form.founderName);
    data.append('email',        form.email);
    data.append('phone',        form.phone);
    data.append('startupName',  form.startupName);
    data.append('stage',        form.stage);
    data.append('sector',       form.sector);
    data.append('website',      form.website);
    data.append('oneLiner',     form.oneLiner);
    data.append('source',       form.source);
    if (form.pitchDeck) data.append('pitchDeck', form.pitchDeck);

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed.');
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setLoading(false);
    }
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

      {/* ── Left panel ── */}
      <aside className={styles.left}>
        <div className={styles.leftInner}>

          <div className={styles.leftTop}>
            <img src="/ignite-logo.png" alt="IGNITE" className={styles.logoMark} />
            <span className={styles.eyebrow}>IGNITE 2026 · Dubai</span>
          </div>

          <div className={styles.stepMeta} key={step}>
            <span className={styles.stepNum}>{STEPS[step].num} / 04</span>
            <h1 className={styles.heading}>{STEPS[step].title}</h1>
            <p className={styles.subtext}>{STEPS[step].desc}</p>
          </div>

          {/* Progress */}
          <div className={styles.progressWrap}>
            <div
              className={styles.progressBar}
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className={styles.dots}>
            {STEPS.map((s, i) => (
              <div key={i} className={styles.dotItem}>
                <div className={`${styles.dot} ${i < step ? styles.dotDone : ''} ${i === step ? styles.dotActive : ''}`}>
                  {i < step && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path d="M1.5 4l2 2 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className={`${styles.dotLabel} ${i === step ? styles.dotLabelActive : ''} ${i < step ? styles.dotLabelDone : ''}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </aside>

      {/* ── Right form panel ── */}
      <section className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div
            key={animKey}
            className={`${styles.stepContent} ${dir === 'forward' ? styles.slideFromRight : styles.slideFromLeft}`}
          >

            {/* Step 1 */}
            {step === 0 && (
              <>
                <h2 className={styles.stepHeading}>Let&apos;s start with you.</h2>
                <div className={styles.fields}>
                  <Field label="Founder Name" error={errors.founderName} required>
                    <input className={`${styles.input} ${errors.founderName ? styles.inputError : ''}`}
                      type="text" placeholder="Your full name"
                      value={form.founderName} onChange={set('founderName')} />
                  </Field>
                  <Field label="Email" error={errors.email} required>
                    <input className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      type="email" placeholder="you@startup.com"
                      value={form.email} onChange={set('email')} />
                  </Field>
                  <Field label="Phone" hint="Optional">
                    <input className={styles.input} type="tel" placeholder="+91 ···"
                      value={form.phone} onChange={set('phone')} />
                  </Field>
                </div>
              </>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <>
                <h2 className={styles.stepHeading}>About your startup.</h2>
                <div className={styles.fields}>
                  <Field label="Startup Name" error={errors.startupName} required>
                    <input className={`${styles.input} ${errors.startupName ? styles.inputError : ''}`}
                      type="text" placeholder="Your company name"
                      value={form.startupName} onChange={set('startupName')} />
                  </Field>
                  <div className={styles.row}>
                    <Field label="Stage" error={errors.stage} required>
                      <select className={`${styles.input} ${styles.select} ${errors.stage ? styles.inputError : ''}`}
                        value={form.stage} onChange={set('stage')}>
                        <option value="">Select stage</option>
                        {STAGES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Sector" error={errors.sector} required>
                      <select className={`${styles.input} ${styles.select} ${errors.sector ? styles.inputError : ''}`}
                        value={form.sector} onChange={set('sector')}>
                        <option value="">Select sector</option>
                        {SECTORS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Website / LinkedIn" hint="Optional">
                    <input className={styles.input} type="url" placeholder="https://"
                      value={form.website} onChange={set('website')} />
                  </Field>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <>
                <h2 className={styles.stepHeading}>Your idea &amp; pitch.</h2>
                <div className={styles.fields}>
                  <Field label="What does your startup do?" error={errors.oneLiner} required>
                    <textarea className={`${styles.input} ${styles.textarea} ${errors.oneLiner ? styles.inputError : ''}`}
                      rows={4} placeholder="One sentence that captures your product and who it's for."
                      value={form.oneLiner} onChange={set('oneLiner')} />
                  </Field>
                  <Field label="Pitch Deck" hint="PDF · max 20 MB · optional" error={errors.pitchDeck}>
                    {form.pitchDeck ? (
                      <div className={styles.fileUploaded}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                            stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2v6h6M9 13h6M9 17h4"
                            stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                        <div className={styles.fileInfo}>
                          <span className={styles.fileName}>{form.pitchDeck.name}</span>
                          <span className={styles.fileSize}>{(form.pitchDeck.size / 1024 / 1024).toFixed(1)} MB</span>
                        </div>
                        <button type="button" className={styles.fileRemove}
                          onClick={() => setForm((f) => ({ ...f, pitchDeck: null }))} aria-label="Remove file">✕</button>
                      </div>
                    ) : (
                      <div
                        className={`${styles.dropzone} ${dragging ? styles.dropzoneActive : ''}`}
                        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
                        onClick={() => fileRef.current?.click()}
                      >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 8l-5-5-5 5M12 3v12"
                            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={styles.dropText}>
                          <span className={styles.dropLink}>Click to upload</span> or drag &amp; drop
                        </p>
                        <p className={styles.dropHint}>PDF · max 20 MB</p>
                        <input ref={fileRef} type="file" accept=".pdf"
                          className={styles.fileHiddenInput}
                          onChange={(e) => handleFile(e.target.files[0])} />
                      </div>
                    )}
                  </Field>
                </div>
              </>
            )}

            {/* Step 4 */}
            {step === 3 && (
              <>
                <h2 className={styles.stepHeading}>One last thing.</h2>
                <div className={styles.fields}>
                  <Field label="How did you hear about IGNITE?" hint="Optional">
                    <select className={`${styles.input} ${styles.select}`}
                      value={form.source} onChange={set('source')}>
                      <option value="">Select one</option>
                      {SOURCES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                  <div className={styles.summary}>
                    <p className={styles.summaryLabel}>Application summary</p>
                    <dl className={styles.summaryGrid}>
                      <dt>Founder</dt>   <dd>{form.founderName}</dd>
                      <dt>Email</dt>     <dd>{form.email}</dd>
                      {form.phone && <><dt>Phone</dt><dd>{form.phone}</dd></>}
                      <dt>Startup</dt>   <dd>{form.startupName}</dd>
                      <dt>Stage</dt>     <dd>{form.stage}</dd>
                      <dt>Sector</dt>    <dd>{form.sector}</dd>
                      {form.website && <><dt>Website</dt><dd>{form.website}</dd></>}
                      {form.pitchDeck && <><dt>Pitch deck</dt><dd>{form.pitchDeck.name}</dd></>}
                    </dl>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className={styles.nav}>
            {step > 0 && (
              <button type="button" className={styles.navBack} onClick={goBack} disabled={loading}>← Back</button>
            )}
            {step < STEPS.length - 1 ? (
              <button type="button" className={styles.navNext} onClick={goNext}>
                Continue
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <>
                {submitError && (
                  <span className={styles.error} style={{ alignSelf: 'center', marginRight: 'auto' }}>
                    {submitError}
                  </span>
                )}
                <button type="submit" className={styles.navNext} disabled={loading}>
                  {loading ? 'Submitting…' : 'Submit Application'}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </>
            )}
          </div>

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
