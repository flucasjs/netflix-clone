import React, { useState, createContext, useContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext(null);

function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccorionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  const toggleState = React.useMemo(
    () => ({ toggleShow, setToggleShow }),
    [toggleShow],
  );

  return (
    <ToggleContext.Provider value={toggleState}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { setToggleShow } = useContext(ToggleContext);

  const toggle = React.useCallback(
    () => setToggleShow((v) => !v),
    [setToggleShow],
  );

  return (
    <Header onClick={toggle} {...restProps}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...restProps}>{children}</Body>;
};

export default Accordion;
