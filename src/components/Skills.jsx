import ProgressCircles from './ProgressCircle'


const Skills = () => {
  return (
    <div className="myTech" id="skills">
      <div className="tech-container">
        <h1>
          Tech <span>Stacks</span>
        </h1>
        <p className="tech-description">
          From responsive frameworks to design software—I craft innovative and
          engaging web solutions that elevate brands and enhance user
          experiences using the latest technologies.
        </p>


        <div className="skills">
          <ProgressCircles />
        </div>
      </div>
    </div>
  )
}

export default Skills
