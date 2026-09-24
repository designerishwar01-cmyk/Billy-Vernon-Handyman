// Reusable demo content: update this file to adapt the site for another business.
export const site = {
 name: 'Billy Vernon Handyman', brandLine: 'Billy Vernon', brandSubline: 'Handyman',
 phone: '+44 7949 830689', phoneHref: 'tel:+447949830689',
 address: 'Taunton, Somerset, United Kingdom',
 area: 'Taunton, Somerset', areaSentence: 'Taunton, Somerset', coverage: 'Taunton and surrounding areas',
 logo: '', // Optional local image URL; leave blank for the text wordmark.
 rating: 'TBC', reviewCount: 'TBC',
 heroVideo: '/video/garden-hero.mp4', heroPoster: '/images/hero-poster.webp',
 supportingImage: '/images/garden-evening.webp',
 imageryNote: 'Illustrative demo imagery · Not verified completed projects',
 projects: [
  {title:'Garden Transformation',image:'/images/garden-transformation.webp',alt:'Residential garden with a lawn, planting beds and patio beside a brick house'},
  {title:'Fresh Lawn Finish',image:'/images/fresh-lawn-finish.webp',alt:'Striped lawn framed by planting and hedges in a residential back garden'},
  {title:'Regular Garden Maintenance',image:'/images/regular-garden-maintenance.webp',alt:'Gardener mowing a residential lawn with tools and collected trimmings nearby'},
 ],
 // Only add genuine, verified quotations and customer names.
 reviews: [] as {name:string;quote:string}[],
 services:[
 {title:'Garden Services',copy:'Practical garden care to keep residential outdoor spaces neat, manageable and looking their best.'},
 {title:'Garden Maintenance',copy:'Regular or one-off maintenance for lawns, borders, shrubs and the wider garden.'},
 {title:'Arboriculture',copy:'Professional arboriculture services for trees within residential gardens and outdoor spaces.'},
 {title:'Tree Services',copy:'Tree care services as part of maintaining a safe, clear and well-kept garden.'},
 {title:'Landscaping',copy:'Garden landscaping focused on attractive, practical outdoor spaces suited to the property.'},
 {title:'Gardening & Arboriculture',copy:'Flexible support across general gardening, maintenance, landscaping and tree care needs.'}
 ]
};
