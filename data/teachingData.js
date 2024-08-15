import { description } from "./siteMetadata"

const teachingData = [
  {
    institution: 'CMKL',
    logo: '/static/images/cmkl.png',
    courses: [
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
        title: 'Introductory Physics',
        code: 'NRRU-401101',
        semesters: 'Fall 2022 - Present',
        description: 'Basic mechanics Vibrations and waves, thermodynamics, fluids, electric fields, magnetic fields, sound, light, and modern physics.',
        link: ''
      },
      {
        title: 'Energy and Environment',
        code: 'NRRU-061306',
        semesters: 'Spring 2023 - Present',
        description: 'Definition and types of energy. Energy use from the past to the present Power consumption problems that have an impact on the economy, society, politics, technology and the environment energy conservation Natural resources and the environment, global warming, disasters, various forms of pollution and ways to prevent and solve them.',
        link: ''
      }
    ]
  }
]

export default teachingData
