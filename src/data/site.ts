export const audiences = [
  { slug: 'employers', label: 'Employers', description: 'One connected healthcare resource for your workforce.' },
  { slug: 'associations', label: 'Associations', description: 'A practical healthcare benefit for your members.' },
  { slug: 'individuals-and-families', label: 'Individuals & families', description: 'Virtual care and personal support for you and your family.' },
] as const;

// Exact reseller destinations in Luke's October 3 forwarded Amaze email.
export const providerLinks = {
  employers: 'https://learn.amazehealth.com/wyckoffconsultingeg/',
  associations: 'https://learn.amazehealth.com/wyckoffconsultingorgs/',
  // Supply the approved tracked URL here before enabling direct enrollment.
  individualEnrollment: null as string | null,
};

export const contentUpdated = '2026-10-05';
export const contentUpdatedLabel = 'October 5, 2026';
