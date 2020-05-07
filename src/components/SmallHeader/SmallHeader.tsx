import React, {FunctionComponent} from 'react';
import './SmallHeader.css';

export interface Props {
  headline: string;
}

export const SmallHeader: FunctionComponent<Props> = ({ headline }) => (
  <h1 className="SmallHeader--headline">{headline}</h1>
);
