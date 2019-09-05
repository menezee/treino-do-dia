import React from 'react';
import styles from './space-wrapper.module.css';

function SpaceWrapper({ children }) {
  return (
    <div className={styles.padding}>
      { children }
    </div>
  );
}

export {
  SpaceWrapper,
};
