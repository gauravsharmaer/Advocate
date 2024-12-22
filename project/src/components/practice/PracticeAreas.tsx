import React from "react";
import { Scale, Briefcase, Building2, Car, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";

const practiceAreas = [
  {
    title: "Criminal Defense",
    description: "Protecting your rights in criminal cases",
    icon: Scale,
    slug: "criminal-defense",
  },
  {
    title: "Corporate Law",
    description: "Legal solutions for businesses",
    icon: Building2,
    slug: "corporate-law",
  },
  {
    title: "Personal Injury",
    description: "Getting you the compensation you deserve",
    icon: Users,
    slug: "personal-injury",
  },
  {
    title: "Real Estate",
    description: "Handling all property-related matters",
    icon: Home,
    slug: "real-estate",
  },
  {
    title: "Auto Accidents",
    description: "Expert representation for accident victims",
    icon: Car,
    slug: "auto-accidents",
  },
  {
    title: "Employment Law",
    description: "Protecting workplace rights",
    icon: Briefcase,
    slug: "employment-law",
  },
];

export function PracticeAreas() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Expert Legal Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Practice Areas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I offer comprehensive legal services across multiple practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                to={`/practice-areas/${area.slug}`}
                className="group relative flex flex-col items-start"
              >
                <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200">
                  <area.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">
                  {area.title}
                </dt>
                <dd className="mt-2 leading-7 text-gray-600">
                  {area.description}
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
