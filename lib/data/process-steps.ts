export interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    stepNumber: '01',
    title: 'Identifying The Problem',
    description:
      'The first step of building your custom AI solutions begins with identifying the problem and opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing best practices and data sets is necessary to identify areas for implementing automation and development.',
    image: '/images/process/process-01.png',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Preparing The Data',
    description:
      'Data preparation is crucial for AI development. We collect, clean, and organize data to ensure accuracy and relevance. Our team processes large datasets and prepares them for training machine learning models.',
    image: '/images/process/process-01.png',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'The Suited AI Model',
    description:
      'Selecting the right AI model is essential for project success. We evaluate various algorithms and architectures to find the best fit for your specific use case and requirements.',
    image: '/images/process/process-01.png',
  },
  {
    id: 4,
    stepNumber: '04',
    title: 'Training The Model',
    description:
      'Model training involves feeding prepared data into selected algorithms. We fine-tune parameters and validate results to ensure optimal performance and accuracy.',
    image: '/images/process/process-01.png',
  },
  {
    id: 5,
    stepNumber: '05',
    title: 'Testing & Validation',
    description:
      'Rigorous testing ensures the AI model performs as expected. We validate results against real-world scenarios and make necessary adjustments.',
    image: '/images/process/process-01.png',
  },
  {
    id: 6,
    stepNumber: '06',
    title: 'Deployment',
    description:
      'We deploy the AI solution into your production environment, ensuring seamless integration with existing systems and workflows.',
    image: '/images/process/process-01.png',
  },
  {
    id: 7,
    stepNumber: '07',
    title: 'Monitoring & Optimization',
    description:
      'Continuous monitoring and optimization ensure the AI solution maintains peak performance. We track metrics and make improvements over time.',
    image: '/images/process/process-01.png',
  },
];
