import { description } from "./siteMetadata"

const teachingData = [
  {
    institution: 'CMKL',
    logo: '/static/images/cmkl.png',
    courses: [
      {
        title: 'Recommender Systems',
        code: 'AIC-601',
        semesters: 'Spring 2025',
        description: 'Introduction to recommendation systems. Ranking metrics and evaluations. Algorithms for typical recommendation systems.',
        link: ''
      },
      {
        title: 'Generative AI (Graduate Level)',
        code: '41-623',
        semesters: 'Spring 2025',
        description: 'Comprehensive overview of generative machine-learning model',
        link: ''
      },  
      {
        title: 'Informational Retrieval and Extraction',
        code: 'AIC-401',
        semesters: 'Fall 2024',
        description: 'Information retrieval and extraction. Search and indexing. Various techniques for extracting information from structured or unstructured data sets, and for building systems that allow this information to be accessed quickly based on content.',
        link: ''
      }
    ]
  },
  {
    institution: 'KMUTT',
    logo: '/static/images/kmutt.png',
    courses: [
      {
        title: 'Artifiical Intelligence and Machine Learning',
        code: 'MEE-673',
        semesters: 'Spring 2025',
        description: 'A comprehensive introduction to Artificial Intelligence (AI) and Machine Learning (ML), exploring foundational concepts, techniques, and real-world applications. The basics of AI, supervised and unsupervised learning, neural networks, and decision trees, along with practical implementation using popular tools and frameworks.',
        link: ''
      },
      {
        title: 'Atomistic Modeling of Materials',
        code: 'MEE-471',
        semesters: 'Fall 2024',
        description: 'Theory and application of atomistic computer simulations to model, understand, and predict the properties of real materials. Specific topics include: energy models from classical potentials to first-principles approaches; Hartree-Fock theory, density functional theory and the total-energy pseudopotential method; errors and accuracy of quantitative predictions: review of statistical thermodynamics; thermodynamic ensembles.',
        link: ''
      }
    ]
  },
  {
    institution: 'NRRU',
    logo: '/static/images/nrru.png',
    courses: [
      {
        title: 'Green Globe',
        code: 'NRRU-401101',
        semesters: 'Spring 2025 - Present',
        description: 'Environmental science and introduction to sustainable development practices.',
        link: ''
      },
      {
        title: 'Introductory Physics',
        code: 'NRRU-401101',
        semesters: 'Fall 2022 - Fall 2024',
        description: 'Basic mechanics Vibrations and waves, thermodynamics, fluids, electric fields, magnetic fields, sound, light, and modern physics.',
        link: ''
      },
      {
        title: 'Energy and Environment',
        code: 'NRRU-061306',
        semesters: 'Spring 2023 - Fall 2024',
        description: 'Definition and types of energy. Energy use from the past to the present Power consumption problems that have an impact on the economy, society, politics, technology and the environment energy conservation Natural resources and the environment, global warming, disasters, various forms of pollution and ways to prevent and solve them.',
        link: ''
      }
    ]
  }
]

export default teachingData
