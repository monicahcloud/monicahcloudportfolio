import ProjectsCard from './ProjectsCard'
import { projects } from '../data'

const Projects = () => {
  return (
    <>
      <section className="portfolioHeading" id="projects">
        <h1>
          Web <span>Creations</span>
        </h1>
        <div className="projectSection">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />
          })}
        </div>
      </section>
      <ProjectsCard />
    </>
  )
}

export default Projects
