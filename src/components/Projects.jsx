import ProjectsCard from './ProjectsCard'
import img1 from '../assets/images/4-removebg-preview.png'
import img2 from '../assets/images/3-removebg-preview.png'
import img3 from '../assets/images/2-removebg-preview.png'


const Projects = () => {
const projects = [
  {
    id: 1,
    url: 'https://gamehubsplendid.netlify.app/',
    title: 'Game Hub',
    topic: 'Interactive Game Library',
    image: img1,
    info: 'Tech Stack: Tailwind, DaisyUI, TypeScript, ReactJS',
    git: 'https://github.com/monicahcloud/gameHub',
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
    url: 'https://chicspaces.netlify.app',
    title: 'Chic Spaces',
    topic: 'E-Commerce Online Store',
    image: img3,
    info: 'Tech Stack: React, Redux, Axios ',
    git: 'https://github.com/monicahcloud/chicSpaces',
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
