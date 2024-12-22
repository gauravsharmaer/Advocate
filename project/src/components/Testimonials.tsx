import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "The team's dedication to my case was exceptional. They fought tirelessly for my rights and achieved an outcome I never thought possible.",
    author: "Sarah Johnson",
    role: "Personal Injury Client"
  },
  {
    content: "Professional, knowledgeable, and compassionate. They guided me through every step of my case with expertise and genuine care.",
    author: "Michael Chen",
    role: "Corporate Law Client"
  },
  {
    content: "I couldn't have asked for better representation. Their expertise in criminal defense made all the difference in my case.",
    author: "David Thompson",
    role: "Criminal Defense Client"
  }
];

export function Testimonials() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white px-6 pb-8 pt-10 shadow-sm ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10"
              >
                <div className="absolute top-0 -translate-y-1/2 transform">
                  <Quote className="h-8 w-8 text-indigo-600" />
                </div>
                <figure className="mt-2">
                  <blockquote className="text-gray-900">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}