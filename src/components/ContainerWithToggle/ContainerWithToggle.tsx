import React, { useState } from 'react';

import { Container } from '../Container/Container';

interface Props {
  header: React.ReactNode;
  body: React.ReactNode;
  aside(onClose: () => void): React.ReactNode;
}

export const ContainerWithToggle: React.FunctionComponent<Props> = ({ header, body, aside }) => {
  const [asideVisible, setAsideVisible] = useState(false);
  const toggleAside = () => setAsideVisible(!asideVisible);
  const hideAside = () => setAsideVisible(false);

  const wrappedBody = <>
    <p>
      <button onClick={toggleAside}>Toggle aside</button>
    </p>
    {body}
  </>

  const wrappedAside = aside(hideAside);

  return (
      <Container
        header={header}
        body={wrappedBody}
        aside={asideVisible && wrappedAside}
      ></Container>
  );
};
