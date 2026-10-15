export const audiences = [
  { slug: 'employers', label: 'Employers', description: 'One connected healthcare resource for your workforce.' },
  { slug: 'associations', label: 'Associations', description: 'A practical healthcare benefit for your members.' },
  { slug: 'individuals-and-families', label: 'Individuals & families', description: 'Virtual care and personal support for you and your family.' },
] as const;

// Employer and association destinations from Luke's October 3 forwarded Amaze email.
export const providerLinks = {
  employers: 'https://learn.amazehealth.com/wyckoffconsultingeg/',
  associations: 'https://learn.amazehealth.com/wyckoffconsultingorgs/',
  // Individual/family reseller URL supplied by Suzu and forwarded by Luke October 13.
  individualEnrollment: 'https://amazehealth.com/individual-subscription/?referencecode=ACLIDL5H' as string | null,
};

export const contentUpdated = '2026-10-15';
export const contentUpdatedLabel = 'October 15, 2026';
