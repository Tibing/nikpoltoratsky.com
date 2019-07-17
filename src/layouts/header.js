import React from 'react';

import headerStyles from './header.module.css';
import { Menu } from './menu';


export const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Menu/>
    </header>
  );
};
