import ProjectsCard from './ProjectsCard'
import img1 from '../assets/images/4-removebg-preview.png'
import img2 from '../assets/images/3-removebg-preview.png'
import img3 from '../assets/images/2-removebg-preview.png'
import img4 from '../assets/images/9-removebg-preview.png'


const Projects = () => {
const projects = [
  {
    id: 1,
    url: 'https://www.crownoflocs.com',
    title: 'Crown of Locs and Natural Hair',
    topic: 'small business',
    image: img1,
    info: 'Tech Stack: HTML, CSS, ReactJS',
    git: 'https://github.com/monicahcloud/crownoflocs',
  },
  {
    id: 2,
    url: 'https://www.nerahspassion.com',
    title: 'Nerahs Passion',
    topic: 'single page business website',
    image: img2,
    info: 'Tech Stack: HTML, CSS, ReactJS',
    git: 'https://github.com/monicahcloud/nerahspassion',
  },
  {
    id: 3,
    url: 'https://www.google.com',
    title: 'Chic Spaces',
    topic: 'E-Commerce Online Store',
    image: img3,
    info: 'Tech Stack: React, Redux, Axios ',
    git: 'http://github.com/monicahcloud',
  },
  {
    id: 4,
    url: 'https://www.brp.com',
    title: ' Real Estate Market Analysis',
    topic: 'Data Visualization Dashboard',
    image: img4,
    info: 'Tech Stack: Python, HTML, CSS, ReactJS ',
    git: 'http://github.com/monicahcloud',
  },
]
  return (
    <>
      <section className="portfolioHeading " id="projects">
        <h1 className="projectHeading">
          Web <span>Creations</span>
        </h1>
        <div className="projectSection">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />
          })}
        </div>
      </section>
    </>
  )
}

export default Projects
