import React from 'react';
import { LargeHeader } from './components/LargeHeader/LargeHeader';
import { SmallHeader } from './components/SmallHeader/SmallHeader';
import { Sources } from './components/Sources/Sources';
import './App.css';
import { ContainerWithToggle } from './components/ContainerWithToggle/ContainerWithToggle';

const App: React.FunctionComponent<{}> = () => {
  const header1 = (
    <LargeHeader
      headline="The Quick Brown Fox"
      summary="The fox: Quick, brown and fluffy."
      author="For Fox’s Sake"
    ></LargeHeader>
  );
  const body1 = (
    <>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.</p>
      <p>Op brute wijze ving de schooljuf de quasi-kalme lynx.</p>
      <p>Portez ce vieux whisky au juge blond qui fume!</p>
    </>
  );
  const aside1 = (onClose: () => void) => <Sources onClose={onClose} />;

  const header2 = <SmallHeader headline="smol headline"></SmallHeader>;
  const body2 = <p>smol body</p>;
  const aside2 = (onClose: () => void) => (
    <>
      <p>smol aside</p>
      <button onClick={onClose}>smol close</button>
    </>
  );

  return (
    <>
      <ContainerWithToggle
        header={header1}
        body={body1}
        aside={aside1}
      ></ContainerWithToggle>

      <ContainerWithToggle
        header={header2}
        body={body2}
        aside={aside2}
      ></ContainerWithToggle>
    </>
  );
};

export default App;
