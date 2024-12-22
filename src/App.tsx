import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseResultsPage } from './pages/CaseResultsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactForm } from './components/contact/ContactForm';
import { PracticeAreaLayout } from './components/practice/PracticeAreaLayout';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-results" element={<CaseResultsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/practice-areas/:slug" element={<PracticeAreaLayout />} />
        </Routes>
      </div>
    </Router>
  );
}