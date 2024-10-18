import ProgressCircles from "./ProgressCircle"
import pic from '../images/7-removebg-preview.png'


const Skills = () => {
  return (
    <div>
      <div id="skills">
        <div id="" className="myTech">
          <h1
            style={{
              color: '#fff',
              textAlign: 'left',
              marginBottom: '1rem',
              marginTop: '3rem',
              fontSize: '3.3rem',
              textDecoration: 'none',
            }}
          >
            My
            <span> technologies</span>
          </h1>
          <p className="">
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
