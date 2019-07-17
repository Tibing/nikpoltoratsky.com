import React from 'react';

import { articles } from './articles';
import { talks } from './talks';


const Contribution = ({ contribution }) => (
  <li>
    <a href={contribution.href}>
      <span className="date">{contribution.date}</span>
      <span className="title">{contribution.title}</span>
    </a>
  </li>
);

export default () => (
  <section>

    <h1>Articles</h1>

    <ul>
      {articles.map(article => <Contribution contribution={article}/>)}
    </ul>

    <h1>Talks</h1>

    <ul>
      {talks.map(talk => <Contribution contribution={talk}/>)}
    </ul>

  </section>
);
