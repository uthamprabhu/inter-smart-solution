export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'AI development company in India',
    description:
      'One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML)....',
    ctaText: 'Reach us',
    ctaLink: '#contact',
    backgroundImage: '/images/hero/slide-01.png',
  },
  {
    id: 2,
    title: 'Transform Your Business with AI Solutions',
    description:
      'Harness the power of artificial intelligence to drive innovation and efficiency. Our expert team delivers cutting-edge AI solutions tailored to your unique business challenges.',
    ctaText: 'Reach us',
    ctaLink: '#contact',
    backgroundImage: '/images/hero/slide-01.png',
  },
  {
    id: 3,
    title: 'Machine Learning & Deep Learning Experts',
    description:
      'Build intelligent systems that learn and adapt. Our machine learning engineers create robust models that transform data into actionable insights for your organization.',
    ctaText: 'Reach us',
    ctaLink: '#contact',
    backgroundImage: '/images/hero/slide-01.png',
  },
  {
    id: 4,
    title: 'Custom AI Development Services',
    description:
      'From concept to deployment, we craft bespoke AI solutions that align with your business goals. Experience seamless integration of AI technologies into your existing workflows.',
    ctaText: 'Reach us',
    ctaLink: '#contact',
    backgroundImage: '/images/hero/slide-01.png',
  },
];
