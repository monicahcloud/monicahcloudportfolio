import {  FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'


const ProjectsCard = ({url, image, git, info, title, topic}) => {
  return (
    <>
      <article className="projectsArticle shadow-md glass">
        <img className='projectsImage'src={image} alt={title}/>
        <div className="projectsIntro">
            <h2 className='projectTitle'>{title}</h2>
            <p className='projectPara'>{topic}</p>
            <div className="projectLinks">
                <a href={url} target='_blank' className='web'><TbWorldWww/></a>
                <a href={git} target='_blank' className='web'><FaGithub/></a>
            </div>
        </div>
      </article>
    </>
  )}

export default ProjectsCard
