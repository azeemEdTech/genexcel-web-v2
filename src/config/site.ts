export const siteConfig = {
  name: 'GenExcel.ai',
  description: "GenExcel pairs a child's genetic report with Helix, an AI tutor grounded in their own textbooks, plus genetics-adjusted nutrition and fitness guidance.",
  url: 'https://genexcel.ai',
  ogImage: 'https://genexcel.ai/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/genexcel',
    linkedin: 'https://linkedin.com/company/genexcel',
    instagram: 'https://instagram.com/genexcel.ai',
  },
  creator: 'Curanova Global Med LLP',
  appStoreUrl: 'https://apps.apple.com/in/app/genexcel/id6761897177',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.curanova.genexcel',
};

export const navItems = [
  {
    title: 'Product',
    href: '/platform',
    children: [
      { title: 'Platform Overview', href: '/platform', description: 'Genetics, Helix and every system in one place' },
      { title: 'The Science', href: '/science', description: 'How the genetic report is built and read' },
    ],
  },
  {
    title: "Who it's for",
    href: '/solutions',
    children: [
      { title: 'For Families', href: '/solutions/families', description: 'One household account for every child' },
      { title: 'For Schools', href: '/solutions/schools', description: 'Health camps, teacher tools and School Genomics' },
      { title: 'For Healthcare', href: '/solutions/healthcare', description: 'Genetic counsellors, labs and telehealth partners' },
    ],
  },
  { title: 'How It Works', href: '/how-it-works' },
  { title: 'Trust & Privacy', href: '/trust' },
  { title: 'Pricing', href: '/pricing' },
  {
    title: 'Company',
    href: '/about',
    children: [
      { title: 'About Us', href: '/about', description: 'Who we are and what we’re building' },
      { title: 'Careers', href: '/careers', description: 'Join the team behind GenExcel' },
      { title: 'Press', href: '/press', description: 'News, updates and media resources' },
      { title: 'Contact', href: '/contact', description: 'Talk to our team' },
    ],
  },
  {
    title: 'Resources',
    href: '/blog',
    children: [
      { title: 'Blog', href: '/blog', description: 'Articles on genetics, learning and wellness' },
      { title: 'FAQs', href: '/faqs', description: 'Answers to common questions' },
      { title: 'Help Center', href: '/help', description: 'Get support with GenExcel' },
    ],
  },
];

export const footerLinks = {
  product: [
    { title: 'Platform Overview', href: '/platform' },
    { title: 'The Science', href: '/science' },
    { title: 'How It Works', href: '/how-it-works' },
    { title: 'Pricing', href: '/pricing' },
  ],
  whoItsFor: [
    { title: 'For Families', href: '/solutions/families' },
    { title: 'For Schools', href: '/solutions/schools' },
    { title: 'For Healthcare', href: '/solutions/healthcare' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Press', href: '/press' },
    { title: 'Contact', href: '/contact' },
  ],
  resources: [
    { title: 'Blog', href: '/blog' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Help Center', href: '/help' },
  ],
  legal: [
    { title: 'Trust & Privacy', href: '/trust' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'DPDP Compliance', href: '/dpdp' },
    { title: 'Delete Account', href: '/delete-account' },
  ],
};

export const stats = [
  { value: 1020, suffix: '+', label: 'Genetic Traits Catalogued' },
  { value: 225000, suffix: '+', label: 'Textbook Passages for Helix' },
  { value: 26, suffix: '', label: 'Genetic Trait Profiles' },
  { value: 8, suffix: '', label: 'Playable Cognitive Games' },
];

// Used as the fallback/default content for the admin CMS "Features" section
// editor (src/app/(admin)/admin/pages) via getPageContent() in src/lib/content.ts.
export const features = [
  {
    icon: 'Dna',
    title: 'Genetic Reports',
    description: 'A report across diet, learning, fitness, personality and health, read from the lab PDF in about ten seconds and framed the same way your counsellor sees it.',
    color: 'from-blue-500 to-cyan-500',
    href: '/platform#genetics',
  },
  {
    icon: 'Bot',
    title: 'Helix, the AI Tutor',
    description: "Answers homework from your child's own textbook, in their own language, and never mentions genetics while it teaches.",
    color: 'from-purple-500 to-pink-500',
    href: '/platform#helix',
  },
  {
    icon: 'Camera',
    title: 'AI NutriScan',
    description: 'Snap a photo of any meal for instant nutrition analysis, with calorie and macro targets that carry genetic adjustments.',
    color: 'from-green-500 to-emerald-500',
    href: '/platform#nutrition',
  },
  {
    icon: 'HeartPulse',
    title: 'Fitness & Habits',
    description: 'Workout plans, live gym logging and step tracking that sync with Apple Health or Health Connect.',
    color: 'from-red-500 to-orange-500',
    href: '/platform#fitness',
  },
  {
    icon: 'GraduationCap',
    title: 'School Genomics',
    description: 'A learning profile that shapes lesson plans for teachers and study plans for students, without ever showing a child a score or a label.',
    color: 'from-indigo-500 to-blue-500',
    href: '/solutions/schools',
  },
  {
    icon: 'Users',
    title: 'Family Dashboard',
    description: 'One household account for up to five children, with consent you grant and can withdraw at any time.',
    color: 'from-teal-500 to-cyan-500',
    href: '/solutions/families',
  },
];

export const testimonials = [
  {
    quote: "GenExcel helped us understand why our son struggled with focus in school. The genetic insights led us to the right dietary changes, and Helix explains his homework in a way that finally clicks. He's thriving now!",
    author: 'Priya M.',
    role: 'Parent of 9-year-old',
    location: 'Mumbai',
  },
  {
    quote: "As a pediatrician, I recommend GenExcel to families who want to take a proactive approach to their child's health. The insights are clinically relevant, and the risk-related findings are framed carefully for parents rather than the child.",
    author: 'Dr. Rajesh K.',
    role: 'Pediatrician',
    location: 'Bangalore',
  },
  {
    quote: "My daughter loves the brain games and is always excited to 'scan' her meals. It's made healthy eating fun and helped her take ownership of her health at just 7 years old.",
    author: 'Anita S.',
    role: 'Parent of 7-year-old',
    location: 'Delhi',
  },
  {
    quote: "What sold me was that Helix answers from my son's actual textbook, not generic internet answers — and it never once mentioned his genetic report to him. That line between what I see as a parent and what he sees matters to us.",
    author: 'Karthik R.',
    role: 'Parent of 11-year-old',
    location: 'Chennai',
  },
];

export const pricingPlans = [
  {
    name: 'Basic',
    description: 'The full app experience, without a genetic report',
    features: [
      'Account, household and child profiles',
      'Helix AI tutor, chat and voice',
      'Textbook-grounded schoolwork help',
      'Learning hub, lesson learner, study plans and roadmaps',
      'Academic results, report-card scanning and mastery mapping',
      'Psychometric learning profile',
      'Diet plans, food scanning, water and weight tracking',
      'Fitness plans, gym logging, habits and achievements',
      'Step tracking, wearables and health metrics',
      'Games, rewards and journey',
      'Lifestyle section (in place of My Traits)',
    ],
    cta: 'Talk to Us',
    href: '/contact',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Everything in Basic, plus your child’s genetic report',
    features: [
      'Everything in Basic',
      'Genetic report assignment',
      'My Traits section: diet, learning, fitness, personality and health',
      'Genetic personalisation of the tutor',
      'Genetic adjustments in nutrition and fitness plans',
    ],
    cta: 'Talk to Us',
    href: '/contact',
    popular: true,
  },
];
