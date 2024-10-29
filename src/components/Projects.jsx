import ProjectsCard from './ProjectsCard'


const Projects = () => {
const projects = [
  {
    id: 1,
    url: 'https://www.crownoflocs.com',
    title: 'Crown of Locs and Natural Hair LLC.',
    topic: 'small business',
    image: '../src/assets/images/2-removebg-preview.png',
    info: ' This is a single page website with routing/navigation',
    git: 'https://github.com/monicahcloud/crownoflocs',
  },
  {
    id: 2,
    url: 'https://www.nerahspassion.com',
    title: 'Nerahs Passion',
    topic: 'single page business website',
    image: '../src/assets/images/3-removebg-preview.png',
    info: 'This is a single page website. ',
    git: 'https://github.com/monicahcloud/nerahspassion',
  },
  {
    id: 3,
    url: 'https://www.google.com',
    title: 'EPIC',
    topic: 'non-profit website',
    image: '../src/assets/images/4-removebg-preview.png',
    info: 'This project was built using ReactJS. ',
    git: 'http://github.com/monicahcloud',
  },
  {
    id: 4,
    url: 'https://www.brp.com',
    title: " Monicah's Journey",
    topic: 'personal blog',
    image: '../src/assets/images/9-removebg-preview.png',
    info: 'This project was built using ReactJS. ',
    git: 'http://github.com/monicahcloud',
  },
]
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
     
    </>
  )
}

export default Projects
