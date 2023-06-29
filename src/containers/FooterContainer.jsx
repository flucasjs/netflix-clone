import React from 'react';
import { footerData } from '../fixtures';
import { Footer } from '../components';

function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.List>
        {footerData.map((item) => (
          <Footer.Link key={item.id} href={item.path}>
            {item.title}
          </Footer.Link>
        ))}
      </Footer.List>
      <Footer.Text>Netflix United States</Footer.Text>
    </Footer>
  );
}

export default FooterContainer;
