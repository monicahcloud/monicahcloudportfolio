

const ProgressBars = () => {
  return (
    <>
      <div className="barsContainer">
        <div className="barsSkillsBox">
            <span className="barsTitle">HTML</span>
            <div className="skillBar">
                <div className="skillPer html">
                    <span className="tooltip">90%</span>
                </div>
            </div>
        </div>
        <div className="barsSkillsBox">
            <span className="barsTitle">CSS</span>
            <div className="skillBar">
                <div className="skillPer css">
                    <span className="tooltip">70%</span>
                </div>
            </div>
        </div>
        <div className="barsSkillsBox">
            <span className="barsTitle">JavaScript</span>
            <div className="skillBar">
                <div className="skillPer js">
                    <span className="tooltip">80%</span>
                </div>
            </div>
        </div>
        <div className="barsSkillsBox">
            <span className="barsTitle">ReactJS</span>
            <div className="skillBar">
                <div className="skillPer react">
                    <span className="tooltip">88%</span>
                </div>
            </div>
        </div>
        <div className="barsSkillsBox">
            <span className="barsTitle">Python</span>
            <div className="skillBar">
                <div className="skillPer pytho">
                    <span className="tooltip">80%</span>
                </div>
            </div>
        </div>
        <div className="barsSkillsBox">
            <span className="barsTitle">Figma</span>
            <div className="skillBar">
                <div className="skillPer figma">
                    <span className="tooltip">90%</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBars
