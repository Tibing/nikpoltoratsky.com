import React from 'react';

import { Speaker } from '../components/speaker/speaker';


export default () => (
  <section>

    <Speaker/>

    <p>
      Hi there!
    </p>

    <p>
      I'm a Software Engineer from Minsk, Belarus.
      I strive to be a friendly decent person in day to day life.
      I’m an open source contributor and tech author.
      I passionate about sharing knowledge and digging into the depths of technologies.
    </p>

    <p>
      Nowadays I'm working a lot on opensource projects and here are my favorite:
    </p>

    <ul>

      <li>
        <a href="https://github.com/akveo/nebular">Nebular</a> - full-featured UI Kit for Angular applications
      </li>

      <li>
        <a href="https://github.com/akveo/ngx-admin">ngx-admin</a> - Admin template based on Angular 8+ and Nebular
      </li>

      <li>
        <a href="https://uibakery.io">UI Bakery</a> - Low code platform
      </li>

    </ul>

  </section>
);

