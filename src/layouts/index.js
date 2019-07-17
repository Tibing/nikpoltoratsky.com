import React from 'react';

import './global.css';

import layoutStyles from './index.module.css';
import { Header } from './header';

export default class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         Gatsby Starter Blog
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: 'Montserrat, sans-serif',
    //         marginTop: 0,
    //         marginBottom: rhythm(-1),
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         Gatsby Starter Blog
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div className={layoutStyles.container}>
        <Header/>
        <main className={layoutStyles.main}>
          {children()}
        </main>
      </div>
    );
  }
}
