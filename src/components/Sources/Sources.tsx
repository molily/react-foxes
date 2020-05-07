import React, { FunctionComponent } from 'react';

export interface Props {
  onClose: () => void;
}

export const Sources: FunctionComponent<Props> = ({ onClose }) => (
  <>
    <h1>Fox sources</h1>
    <ul>
      <li>No foxes were harmed!</li>
    </ul>
    <button onClick={onClose}>Close sources</button>
  </>
);
