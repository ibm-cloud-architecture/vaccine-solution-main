import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    <span>IBM Garage</span>&nbsp;Vaccine Delivery at Scale
  </Header>
);

export default CustomHeader;
