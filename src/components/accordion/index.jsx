import React, { createContext, useContext } from 'react';
import useToggle from '../../hooks/useToggle';
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './styles/Accordion';

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

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useToggle(false);

  const toggleState = React.useMemo(
    () => ({ toggleShow, setToggleShow }),
    [toggleShow, setToggleShow],
  );

  return (
    <ToggleContext.Provider value={toggleState}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={setToggleShow} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return <Body toggleShow={toggleShow} {...restProps}>{children}</Body>;
};

export default Accordion;
