import React from 'react';
import { Hero } from '../components/Hero';
import { PracticeAreas } from '../components/practice/PracticeAreas';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/contact/ContactForm';

export function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <Testimonials />
      <ContactForm />
    </>
  );
}