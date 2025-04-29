import React from 'react';

import reactLogo from '../assets/react.svg';
import reactmosLogo from '../assets/reactmos.png';
import '../styles.css';

export default function Welcome() {
  return (
    <div style={styles.container}>
      <div style={styles.blurBg} />
      <div style={styles.logoRow}>
        <img
          src={reactLogo}
          alt="Reactmos logo"
          style={styles.logo}
        />
        <div style={styles.plus}>+</div>
        <img 
          src={reactmosLogo}
          alt="Reactmos logo"
          style={styles.logo}
        />
      </div>
      <h1 style={styles.title}>Welcome to Reactmos</h1>
      <p style={styles.subtitle}>Create extensible modules in React with ease</p>
      <a href="https://reactmos.dev" style={styles.link}>Get started &rarr;</a>
      <div style={styles.tipBox}>
        <div style={{ marginBottom: 12 }}>
          <strong>Tip:</strong> You can easily extend another Reactmos using <code>extends</code>:
        </div>
        <pre style={{ margin: 0 }}>
          <code>
{`export default defineModule({
  extends: '../my-module',
});`}
          </code>
        </pre>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100dvh',
    width: '100%',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    color: 'white',
    fontFamily: 'system-ui, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    paddingInline: '20px',
  },
  blurBg: {
    position: 'absolute',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle at center, #61dafb33, transparent)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    flexWrap: 'wrap',
    zIndex: 1,
    marginBottom: 24,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 'auto',
    zIndex: 1,
  },
  title: {
    fontSize: 36,
    margin: 0,
    zIndex: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 32,
    opacity: 0.8,
    zIndex: 1,
    textAlign: 'center',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 16,
    zIndex: 1,
    border: '1px solid #61dafb',
    borderRadius: 6,
    padding: '10px 20px',
    transition: 'all 0.3s ease',
  },
  plus: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 1,
  },
  tipBox: {
    backgroundColor: '#ffffff10',
    padding: 20,
    margin: 8,
    borderRadius: 8,
    maxWidth: 600,
    fontSize: 14,
    zIndex: 1,
    marginTop: 32,
  },
};