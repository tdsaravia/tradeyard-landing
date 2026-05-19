export type LegalPageKey = 'privacy' | 'support' | 'terms'

type LegalSection = {
  title: string
  paragraphs: string[]
}

type LegalPageContent = {
  title: string
  meta?: string
  intro?: string
  sections: LegalSection[]
}

export const legalPages: Record<LegalPageKey, LegalPageContent> = {
  privacy: {
    title: 'TRADEYARD Privacy Policy',
    meta: 'Effective Date: April 2, 2026 | Last Updated: April 2, 2026',
    intro:
      'Tradeyard, Inc. provides voice-first AI tools for construction trade workers. This Privacy Policy explains what information we collect, how we use it, and your rights.',
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: [
          '1.1 Information You Provide: Account Registration: Name, email, phone number, and trade experience. Voice & Media Inputs: Voice queries and photos/videos submitted for real-time AI assistance or job-site documentation.',
          '1.2 Information Collected Automatically: Usage Data: Feature usage patterns and interaction frequency. Device Info: Device type, OS version, and unique identifiers. Skills Graph: Data derived from your interactions to personalize your professional growth profile.',
          '1.3 Minimal Data Retention: Visual Media: Photos/videos used for AI context are processed and immediately deleted. We do not store or index them. Audio: Voice recordings are processed to text and deleted immediately after the response is generated.',
        ],
      },
      {
        title: 'How We Use Your Information',
        paragraphs: [
          'We use your data to: Provide AI-generated technical support and professional briefings. Develop the Skills Graph, which personalizes your experience based on your competency. Provide Aggregate Analytics to employers. We do not provide individual worker surveillance. Employers only see de-identified, crew-level knowledge gaps. We do not sell your personal data or Skills Graph data to third parties.',
        ],
      },
      {
        title: 'Data Sharing',
        paragraphs: [
          'We share data only in these limited cases: Service Providers: Cloud hosting and AI processing partners who are legally bound to protect your data. Safety & Legal: When required by law or to protect the safety of users on a job site.',
        ],
      },
      {
        title: 'Your Rights and Data Control',
        paragraphs: [
          '4.1 In-App Account Deletion: In compliance with App Store requirements, you may initiate the permanent deletion of your account and all associated data directly within the App Settings. Upon deletion, your personal profile and Skills Graph data are purged from our active databases. Certain logs may be retained for a limited period if required by law or for safety audits.',
          '4.2 Data Access & Portability: You may request a copy of your personal data or your Skills Graph profile by contacting privacy@tradeyard.com.',
        ],
      },
      {
        title: 'Security',
        paragraphs: [
          'We use industry-standard encryption (TLS/AES-256) for data in transit and at rest. While we take every precaution, no system is 100% secure.',
        ],
      },
      {
        title: 'Children',
        paragraphs: ['The Service is strictly for users 18 years of age and older.'],
      },
      {
        title: 'Contact Us',
        paragraphs: [
          'Tradeyard, Inc.',
          'Email: privacy@tradeyard.com',
          'Address: c/o Harvard Business Services, Inc., 16192 Coastal Highway, Lewes, DE 19958',
        ],
      },
    ],
  },
  support: {
    title: 'TRADEYARD Support',
    sections: [
      {
        title: 'For help with the Tradeyard app, contact us at:',
        paragraphs: [
          'Email: support@tradeyard.com',
          'We typically respond within 1 business day.',
          'Tradeyard, Inc. c/o Harvard Business Services, Inc., 16192 Coastal Highway, Lewes, DE 19958',
        ],
      },
    ],
  },
  terms: {
    title: 'TRADEYARD Terms of Service',
    meta: 'Effective Date: April 2, 2026',
    sections: [
      {
        title: 'Agreement to Terms',
        paragraphs: [
          'By accessing or using the Tradeyard mobile application and voice-first AI services, you agree to be bound by these Terms. This agreement is between you and Tradeyard, Inc. only, and not with Apple, Inc. or Google LLC.',
        ],
      },
      {
        title: 'Professional AI Disclaimer',
        paragraphs: [
          'No Substitute for Professional Judgment: Tradeyard provides AI-generated guidance for construction trades. You acknowledge that AI can make mistakes. Safety First: Information provided by Tradeyard is for informational purposes only. You must always prioritize on-site safety protocols, employer instructions, and local regulations including OSHA. Assumption of Risk: You assume all responsibility for how you apply the information provided by the Service on a job site.',
        ],
      },
      {
        title: 'Proprietary Rights and Skills Graph',
        paragraphs: [
          'Tradeyard owns all rights to the Service, including our voice-processing technology and the Skills Graph framework. We grant you a limited, non-transferable, non-sublicensable license to use the Service on any compatible device that you own or control.',
        ],
      },
      {
        title: 'Privacy and Minimal Data Retention',
        paragraphs: [
          'Our Privacy Policy is part of these Terms. Media Deletion: Photos and videos are deleted immediately after processing. No Surveillance: We do not provide individual performance data to employers. Account Deletion: You have the right to delete your account and all associated Skills Graph data at any time by contacting privacy@tradeyard.com.',
        ],
      },
      {
        title: 'Acceptable Use',
        paragraphs: [
          'You agree not to use the Service for any illegal activities, to harass others, or to record audio/video in areas where such activity is prohibited by your employer or site owner.',
        ],
      },
      {
        title: 'App Store Mandatory Clauses',
        paragraphs: [
          'Acknowledgement: Apple and Google have no obligation to furnish any maintenance or support services for the App. Warranty: In the event of any failure of the App to conform to any applicable warranty, you may notify Apple or Google for a refund of the purchase price if any; to the maximum extent permitted by law, they will have no other warranty obligation. Legal Compliance: You represent and warrant that you are not located in a country subject to a U.S. Government embargo and are not listed on any U.S. Government list of prohibited or restricted parties. Third-Party Beneficiary: You acknowledge that Apple and its subsidiaries are third-party beneficiaries of this agreement and have the right to enforce these Terms against you.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'Tradeyard, Inc. shall not be liable for any incidental, special, or consequential damages, including personal injury or property damage, arising from your use of the AI tool.',
        ],
      },
      {
        title: 'Contact Information',
        paragraphs: [
          'Tradeyard, Inc.',
          'Email: info@tradeyard.com',
          'Address: c/o Harvard Business Services, Inc. 16192 Coastal Highway Lewes, DE 19958',
        ],
      },
    ],
  },
}
