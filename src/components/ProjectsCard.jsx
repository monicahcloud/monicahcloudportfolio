import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import PropTypes from 'prop-types' // Import PropTypes for prop validation

const ProjectsCard = ({ url, image, git, title, topic }) => {
  return (
    <article className="projectsArticle shadow-md glass">
      <img className="projectsImage" src={image} alt={title} />
      <div className="projectsIntro">
        <h2 className="projectTitle">{title}</h2>
        <p className="projectPara">{topic}</p>
        <div className="projectLinks">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="web"
          >
            <TbWorldWww className="icon" />
          </a>
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="web"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

// Adding prop types for validation
ProjectsCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
}

export default ProjectsCard
