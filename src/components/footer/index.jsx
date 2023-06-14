import React from 'react';
import {
  Container,
  List,
  Item,
  Link,
  Title,
  Text,
} from './styles/footer';

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.List = function FooterList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <Item>
      <Link {...restProps}>{children}</Link>
    </Item>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default Footer;
