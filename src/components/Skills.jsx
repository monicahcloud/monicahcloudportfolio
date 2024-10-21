import ProgressCircles from "./ProgressCircle"
import pic from '../images/7-removebg-preview.png'


const Skills = () => {
  return (
    <div  className="myTech">
      <div id="skills">
        <div>
          <h1>
            My
            <span> technologies</span>
          </h1>
          <p >
            From responsive frameworks to design software— I craft innovative
            and engaging web solutions that elevate brands and enhance user
            experiences using the latest technologies.
          </p>
       
            <img
              src={pic}
              alt="skills"
              style={{
               textAlign: 'right',
                marginBottom: '1rem', 
              }}
            />
          
        </div>
        <span>
        <div className="skills ">
            <ProgressCircles />

        </div></span>
      </div>
    </div>
  )
}

export default Skills
