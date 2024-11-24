import { useState, useEffect } from 'react'
import ProgressBars from './ProgressBars'
import ProgressCircles from './ProgressCircle'


const Skills = () => {

  const [isLargeScrren, setIsLargeScreen] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1100)
    }
    // Set event listener for resizing
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="myTech" id="skills">
      <div className="tech-container">
        <h1>
          Tech <span>Stacks</span>
        </h1>
        <p id='paragraph' className="tech-description">
          From responsive frameworks to design software—I craft innovative and
          engaging web solutions that elevate brands and enhance user
          experiences using the latest technologies.
        </p>


        <div className="skills">
          {isLargeScrren ? <ProgressCircles/> : <ProgressBars/>}
       
        </div>
      </div>
    </div>
  )
}

export default Skills
