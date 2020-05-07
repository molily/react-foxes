import React, {FunctionComponent} from "react";
import './Container.css';

interface Props {
  // Should be something like:
  // header: React.ReactElement<SmallHeaderProps | LargeHeaderProps, typeof SmallHeader | typeof LargeHeader>;
  header: React.ReactNode;
  body: React.ReactNode;
  aside?: React.ReactNode;
}

export const Container: FunctionComponent<Props> = ({ header, body, aside }) => (
  <section className="Container">
    <div className="Container__main">
      <header className="Container__header">{header}</header>
      <div className="Container__body">{body}</div>
    </div>
    {aside && <aside className="Container__aside">{aside}</aside>}
  </section>
);
