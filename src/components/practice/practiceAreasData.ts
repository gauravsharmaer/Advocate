import { type PracticeArea } from '../../types';

export const practiceAreasData = {
  'criminal-defense': {
    title: 'Criminal Defense',
    description: 'Expert legal defense protecting your rights and freedom',
    commonCases: [
      {
        title: 'DUI Defense',
        description: 'Comprehensive defense for DUI charges, protecting your driving privileges and freedom.'
      },
      {
        title: 'Drug Offenses',
        description: 'Strategic defense against drug possession, distribution, and trafficking charges.'
      },
      {
        title: 'White Collar Crimes',
        description: 'Defense against fraud, embezzlement, and other financial crime allegations.'
      },
      {
        title: 'Violent Crimes',
        description: 'Experienced defense for assault, battery, and other serious criminal charges.'
      }
    ],
    services: [
      'Immediate legal representation after arrest',
      'Evidence analysis and case building',
      'Negotiation with prosecutors',
      'Trial representation',
      'Plea bargain negotiations',
      'Sentencing advocacy',
      'Appeals process handling',
      'Record expungement services'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'Comprehensive review of your case and explanation of your legal options.'
      },
      {
        title: 'Case Strategy Development',
        description: 'Creating a strong defense strategy based on evidence and legal precedents.'
      },
      {
        title: 'Pre-Trial Preparation',
        description: 'Gathering evidence, interviewing witnesses, and filing necessary motions.'
      },
      {
        title: 'Court Representation',
        description: 'Aggressive advocacy in court proceedings to protect your rights.'
      }
    ]
  },
  'corporate-law': {
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses of all sizes',
    commonCases: [
      {
        title: 'Business Formation',
        description: 'Guidance on choosing and establishing the right business structure.'
      },
      {
        title: 'Contract Negotiations',
        description: 'Expert negotiation and drafting of business contracts and agreements.'
      },
      {
        title: 'Mergers & Acquisitions',
        description: 'Strategic guidance through complex business transactions.'
      },
      {
        title: 'Corporate Compliance',
        description: 'Ensuring your business meets all regulatory requirements.'
      }
    ],
    services: [
      'Business entity formation',
      'Contract drafting and review',
      'Corporate governance advice',
      'Regulatory compliance',
      'Shareholder agreements',
      'Business succession planning',
      'Risk management',
      'Intellectual property protection'
    ],
    process: [
      {
        title: 'Business Assessment',
        description: 'Understanding your business needs and objectives.'
      },
      {
        title: 'Legal Strategy',
        description: 'Developing comprehensive legal solutions for your business.'
      },
      {
        title: 'Implementation',
        description: 'Executing legal strategies while minimizing business disruption.'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous legal guidance as your business grows.'
      }
    ]
  }
} as const;