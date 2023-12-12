import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';
import GlobalStyles from '../styles/GlobalStyle';
import Typography from '../styles/Typography';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContactSection />
      <Map />
      <Footer />
    </>
  );
}
