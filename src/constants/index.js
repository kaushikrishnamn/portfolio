import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  java,
  git,
  docker,
  graphql,
  coreBankingSolution,
  dataCleanser,
  automatedRiskAssessment,
  advancingDBSWithAI,
  idSelfieAuthentication,
  dbs,
  usbank,
  nymbus,
  angular,
  flutter,
  aws,
  jenkins,
  neo4j,
  springboot
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Neo4j',
    icon: neo4j,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Development Bank of Singapore',
    icon: dbs,
    iconBg: '#333333',
    date: 'Dec 2017 - Jun 2021',
    points: [
      'Designed and developed web-based applications.',
      'Served as a Full-Stack Java developer at Development Bank of Singapore, contributing to multiple web applications related to audits.'
    ]
  },
  {
    title: 'Software Engineer',
    company_name: 'US Bank',
    icon: usbank,
    iconBg: '#333333',
    date: 'Jun 2021 - Dec 2021',
    points: [
      'Developed an application simplifying the process of opening a bank account with US Bank using facial recognition technology.',
      'Utilized Spring MVC and REST API Architecture.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Nymbus Inc',
    icon: nymbus,
    iconBg: '#333333',
    date: 'Jan 2023 - Present',
    points: [
      'Developed applications that simplify the management of diverse portfolios linked to various banks.',
      'Engaged in data cleansing and information extraction using Python and Chat GPT.'
    ]
  },
];


const projects = [
  {
    id: 'project-1',
    name: 'Core Banking Solution',
    description: 'The application delivers comprehensive banking solutions for diverse entities within the bank and its affiliated banks.',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'Spring Boot',
        color: 'green-text-gradient',
      },
      {
        name: 'REST API',
        color: 'pink-text-gradient',
      },
    ],
    image: coreBankingSolution, // Add the image URL or import statement
    repo: 'https://github.com/kaushikmn/core-banking-solution', // Placeholder link, replace with actual if available
    demo: 'https://demo.core-banking-solution.com', // Placeholder link, replace with actual if available
  },
  {
    id: 'project-2',
    name: 'Data Cleanser',
    description: 'Proficiently conducted data cleansing and information extraction from user transactions using Chat GPT and logo extraction modules.',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'green-text-gradient',
      },
      {
        name: 'Chat GPT',
        color: 'pink-text-gradient',
      },
    ],
    image: dataCleanser, // Add the image URL or import statement
    repo: 'https://github.com/kaushikmn/data-cleanser', // Placeholder link, replace with actual if available
    demo: 'https://demo.data-cleanser.com', // Placeholder link, replace with actual if available
  },
  {
    id: 'project-3',
    name: 'Automated Risk Assessment',
    description: 'The application efficiently automates the assessment of various risk types for the group audit team.',
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'Spring Boot',
        color: 'green-text-gradient',
      },
      {
        name: 'REST API',
        color: 'pink-text-gradient',
      },
    ],
    image: automatedRiskAssessment, // Add the image URL or import statement
    repo: 'https://github.com/kaushikmn/automated-risk-assessment', // Placeholder link, replace with actual if available
    demo: 'https://demo.automated-risk-assessment.com', // Placeholder link, replace with actual if available
  },
  {
    id: 'project-4',
    name: 'Advancing DBS with AI',
    description: 'Establishing a unified data source across all platforms to minimize external data procurement expenses.',
    tags: [
      {
        name: 'Collibra',
        color: 'blue-text-gradient',
      },
      {
        name: 'AWS S3',
        color: 'green-text-gradient',
      },
      {
        name: 'Data API',
        color: 'pink-text-gradient',
      },
    ],
    image: advancingDBSWithAI,
    repo: 'https://github.com/kaushikmn/advancing-dbs-with-ai', // Placeholder link, replace with actual if available
    demo: 'https://demo.advancing-dbs-with-ai.com', // Placeholder link, replace with actual if available
  },
  {
    id: 'project-5',
    name: 'Id Selfie Authentication',
    description: 'Simplifies the process of opening a bank account by capturing a selfie and conducting facial recognition using the user\'s Driver\'s License.',
    tags: [
      {
        name: 'Spring MVC',
        color: 'blue-text-gradient',
      },
      {
        name: 'Java',
        color: 'green-text-gradient',
      },
      {
        name: 'REST API',
        color: 'pink-text-gradient',
      },
    ],
    image: idSelfieAuthentication, // Add the image URL or import statement
    repo: 'https://github.com/kaushikmn/id-selfie-authentication', // Placeholder link, replace with actual if available
    demo: 'https://demo.id-selfie-authentication.com', // Placeholder link, replace with actual if available
  },
];


export { services, technologies, experiences, projects };
