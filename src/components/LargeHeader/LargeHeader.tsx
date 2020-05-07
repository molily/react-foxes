import React, { FunctionComponent } from 'react';
import './LargeHeader.css';

export interface Props {
  headline: string;
  summary: string;
  author: string;
}

export const LargeHeader: FunctionComponent<Props> = ({
  headline,
  summary,
  author,
}) => (
  <div className="LargeHeader">
    <h1 className="LargeHeader--headline">{headline}</h1>
    <p className="LargeHeader--summary">{summary}</p>
    <p className="LargeHeader--author">{author}</p>
  </div>
);
