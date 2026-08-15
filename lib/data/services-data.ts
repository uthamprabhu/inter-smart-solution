export interface Service {
  id: number;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Hyperparameter model tuning',
    description:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.",
  },
  {
    id: 2,
    title: 'AI Consultation',
    description:
      'Get expert guidance on implementing AI solutions in your business. Our consultants help you navigate the complex AI landscape and identify the best strategies for your specific needs.',
  },
  {
    id: 3,
    title: 'NLP Solutions',
    description:
      'Natural Language Processing solutions that enable your systems to understand, interpret, and generate human language. From chatbots to sentiment analysis, we deliver comprehensive NLP services.',
  },
  {
    id: 4,
    title: 'Custom AI Model Development',
    description:
      'Tailored AI models designed specifically for your business requirements. We develop, train, and deploy custom machine learning models that solve your unique challenges.',
  },
];
