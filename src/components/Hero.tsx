import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-slate-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Law office"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Dedicated to Your Success
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          With over 20 years of experience, we provide exceptional legal representation
          when you need it most. Your rights matter, and we're here to protect them.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Free Consultation
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
          <Link
            to="/practice-areas"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Our Practice Areas
          </Link>
        </div>
      </div>
    </div>
  );
}