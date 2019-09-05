import React from 'react';
import { Link } from '@reach/router';
import styles from './header.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <Link to='list'>List</Link>
      <Link to='create'>Create</Link>
    </nav>
  );
}

export {
  Header,
};
