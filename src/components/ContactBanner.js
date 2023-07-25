import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: #858c8a;
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .bkgrd-color-correct {
    background-color: var(--deep-dark);
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
    background-color: #858c8a;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button
            className="bkgrd-color-correct"
            btnText="Contact Now"
            btnLinks="/contact"
          />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
