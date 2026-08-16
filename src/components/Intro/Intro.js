'use client';
import { useEffect, useRef, useState } from 'react';
import { feature } from 'topojson-client';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  useMapContext,
} from 'react-simple-maps';
import styles from './Intro.module.css';

const TOPO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

const PILANI   = [75.6, 28.37]; // BITS Pilani — [lon, lat]
const DUBAI    = [55.3, 25.2];  // Dubai, UAE
const MIDPOINT = [(PILANI[0] + DUBAI[0]) / 2, (PILANI[1] + DUBAI[1]) / 2]; // midway for zoom-out frame

function FlightLayer({ flying, landed }) {
  const { projection } = useMapContext();

  const [pilX, pilY] = projection(PILANI);
  const [dubX, dubY] = projection(DUBAI);

  const cpX = (pilX + dubX) / 2;
  const cpY = (pilY + dubY) / 2 - 90;

  const flightPath = `M ${pilX.toFixed(1)} ${pilY.toFixed(1)} Q ${cpX.toFixed(1)} ${cpY.toFixed(1)} ${dubX.toFixed(1)} ${dubY.toFixed(1)}`;

  return (
    <g>
      <path
        className={`${styles.route} ${flying ? styles.routeDraw : ''}`}
        d={flightPath}
        fill="none"
        stroke="rgba(197,59,72,0.7)"
        strokeWidth="1.5"
        strokeDasharray="480"
        strokeDashoffset="480"
        strokeLinecap="round"
      />

      {/* ── Pilani marker ── */}
      <g transform={`translate(${pilX},${pilY})`}>
        <circle className={styles.pulse} r="6" fill="none" stroke="rgba(197,59,72,0.45)" strokeWidth="1.5" />
        <circle r="4.5" fill="rgba(197,59,72,0.85)" />
        <circle r="2" fill="#fff" />
      </g>
      <text x={pilX + 9} y={pilY - 5} className={styles.cityLabel}>Pilani</text>
      <text x={pilX + 9} y={pilY + 9} className={styles.countryLabel}>India</text>

      {/* ── Dubai marker ── */}
      <g transform={`translate(${dubX},${dubY})`}>
        <circle className={`${styles.pulse} ${landed ? styles.pulseLand : ''}`} r="6" fill="none" stroke="rgba(197,59,72,0.45)" strokeWidth="1.5" />
        <circle r="4.5" fill="rgba(197,59,72,0.85)" />
        <circle r="2" fill="#fff" />
      </g>
      <text x={dubX + 9} y={dubY - 5} className={styles.cityLabel}>Dubai</text>
      <text x={dubX + 9} y={dubY + 9} className={styles.countryLabel}>UAE</text>

      {flying && <AnimatedPlane path={flightPath} />}

      {landed && (
        <g className={styles.arrivalGroup}>
          <text className={styles.arrivalText} x="450" y="478" textAnchor="middle">
            ✦&nbsp; IGNITE 2026 · Dubai &nbsp;✦
          </text>
        </g>
      )}
    </g>
  );
}

function AnimatedPlane({ path }) {
  const animRef = useRef(null);
  useEffect(() => {
    if (animRef.current) animRef.current.beginElement();
  }, []);

  return (
    <g className={styles.plane}>
      <polygon points="0,-8 16,0 0,5" fill="#252525" opacity="0.9" />
      <polygon points="0,-8 0,5 -5,2" fill="rgba(197,59,72,0.8)" />
      <animateMotion
        ref={animRef}
        dur="2.3s"
        begin="indefinite"
        fill="freeze"
        path={path}
        rotate="auto"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.25 0 0.75 1"
      />
    </g>
  );
}

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState('zoomIn');
  const [cameraZoom, setCameraZoom] = useState(4.8); // Start zoomed in on Pilani
  const [cameraCenter, setCameraCenter] = useState(PILANI); // Start at Pilani
  const [topology, setTopology] = useState(null);
  const cb = useRef(onComplete);
  useEffect(() => { cb.current = onComplete; }, [onComplete]);

  useEffect(() => {
    fetch(TOPO_URL)
      .then(r => r.json())
      .then(setTopology);
  }, []);

  useEffect(() => {
    const timers = [
      // 0-0.9s: zoomed in on Pilani
      setTimeout(() => setPhase('zoomOut'), 900),
      // 0.9-2.5s: zoom out and pan to Dubai
      setTimeout(() => setPhase('fly'), 900),
      // 2.5-3.2s: zoom back in on Dubai
      setTimeout(() => setPhase('land'), 3200),
      // 3.2-3.75s: landed state
      setTimeout(() => setPhase('exit'), 3750),
      // 3.75+: fade out
      setTimeout(() => cb.current(), 4350),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Camera animation logic
  useEffect(() => {
    if (phase === 'zoomOut' || phase === 'fly') {
      const startTime = Date.now();
      const duration = 1600; // 1.6s for zoom out + pan

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);

        // Ease out curve
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        // Zoom from 4.8 → 0.8 (zoom out)
        setCameraZoom(4.8 - (4.8 - 0.8) * easeProgress);

        // Pan from Pilani → MIDPOINT so both cities are in frame when zoomed out
        setCameraCenter([
          PILANI[0] - (PILANI[0] - MIDPOINT[0]) * easeProgress,
          PILANI[1] - (PILANI[1] - MIDPOINT[1]) * easeProgress,
        ]);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else if (phase === 'land') {
      const startTime = Date.now();
      const duration = 600; // 0.6s for zoom in

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);

        // Ease in curve
        const easeProgress = Math.pow(progress, 3);

        // Zoom from 0.8 → 4.8 and pan from midpoint → Dubai simultaneously
        setCameraZoom(0.8 + (4.8 - 0.8) * easeProgress);
        setCameraCenter([
          MIDPOINT[0] + (DUBAI[0] - MIDPOINT[0]) * easeProgress,
          MIDPOINT[1] + (DUBAI[1] - MIDPOINT[1]) * easeProgress,
        ]);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [phase]);

  const flying = ['zoomOut', 'fly', 'land', 'exit'].includes(phase);
  const landed = ['land', 'exit'].includes(phase);
  const exiting = phase === 'exit';

  const skip = () => {
    setPhase('exit');
    setTimeout(() => cb.current(), 650);
  };

  return (
    <div className={`${styles.overlay} ${exiting ? styles.exit : ''}`} role="presentation">
      <ComposableMap
        className={styles.map}
        width={900}
        height={500}
        projectionConfig={{
          center: cameraCenter,
          scale: cameraZoom * 450, // Scale multiplier for zoom effect
        }}
      >
        <Sphere stroke="rgba(0,0,0,0.08)" strokeWidth={0.5} fill="none" />
        <Graticule stroke="rgba(0,0,0,0.05)" strokeWidth={0.5} />

        {/* Physical land — single merged polygon, no country borders */}
        {topology && (
          <Geographies geography={{ type: 'FeatureCollection', features: [feature(topology, topology.objects.land)] }}>
            {({ geographies }) => geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: 'rgba(37,37,37,0.12)', stroke: 'none', strokeWidth: 0, outline: 'none' },
                  hover:   { fill: 'rgba(37,37,37,0.12)', stroke: 'none', outline: 'none' },
                  pressed: { fill: 'rgba(37,37,37,0.12)', stroke: 'none', outline: 'none' },
                }}
              />
            ))}
          </Geographies>
        )}


        <FlightLayer flying={flying} landed={landed} />
      </ComposableMap>

      <div className={styles.logoWrap}>
        <img src="/ignite-logo.png" alt="" className={styles.logo} />
      </div>

      <button className={styles.skip} onClick={skip} aria-label="Skip intro">
        skip
      </button>
    </div>
  );
}
