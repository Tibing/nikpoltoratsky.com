import React from 'react';
import GatsbyLink from 'gatsby-link';

import menuStyles from './menu.module.css';

export const Menu = () => {
  return (
    <nav>
      <ul className={menuStyles.menu}>

        <GatsbyLink to={'/'}>Nikita Poltoratsky</GatsbyLink>

        <div>
          <GatsbyLink to={'/contributions'}>Contributions</GatsbyLink>
          <GatsbyLink to={'/about'}>About</GatsbyLink>
          <GatsbyLink to={'/blog'}>Blog</GatsbyLink>
        </div>

      </ul>
    </nav>
  );
};
