import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
    <span>
    <h4>Contribute:</h4>
    <p>As this implementation solution is part of the Event Driven architecture reference architecture, the contribution policies apply the same way <a href="https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/CONTRIBUTING.md">here</a>.</p>
    </span>
);

const links = {
  firstCol: [
    { linkText: 'Contributors:' },
    { href: 'https://www.linkedin.com/in/jeromeboyer/', linkText: 'Jerome Boyer' },
    { href: 'https://www.linkedin.com/in/rosowski/', linkText: 'Rick Osowski' },
    { href: 'https://www.linkedin.com/in/jesus-almaraz-hernandez/', linkText: 'Jesus Almaraz' }
  ],
};

const CustomFooter = () => <Footer  Content={Content} links={links} />;

export default CustomFooter;
