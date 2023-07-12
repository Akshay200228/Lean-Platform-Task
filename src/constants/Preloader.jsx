import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../style';
import './Preloader.css';
import { logo6 } from '../assets';

const Preloader = () => {
  const springProps = useSpring({
    to: async (next) => {
      while (true) {
        await next({ opacity: 0.2, transform: 'scale(0.8)' });
        await next({ opacity: 1, transform: 'scale(1)' });
      }
    },
    from: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 },
    reset: true,
    loop: true,
  });

  return (
    <div className={`${styles.flexCenter} h-screen preloader-container`}> {/* Update the class name */}
      <animated.img
        src={logo6}
        alt="Logo"
        className={`${styles.preloaderLogo} ${styles.pulsatingAnimation}`}
        style={springProps}
      />
    </div>
  );
};

export default Preloader;
