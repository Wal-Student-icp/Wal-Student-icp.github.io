import React, { useState } from "react";
import SkillsApi from "../../skillsApi/SkilllsApi";

const Skill = () => {
  const [skills, setSkills] = useState(SkillsApi);

  return (
    <>
      <div className="skills" id="resumeSkills">
        <h4>Skills</h4>
        <div className="row skillsRow gx-0">
          {skills.map((rec, index) => {
            const { skill, percentage, value } = rec;
            return (
              <div className="col-12 col-lg-6 skillsRowCol" key={index}>
                <label
                  htmlFor={skill}
                  className="row d-flex flex-row justify-content-between"
                >
                  <p className="col-6">{skill}</p>
                  <p className="col-6">{percentage}</p>
                </label>
                <progress
                  id={skill}
                  value={value}
                  max="100"
                  className="progress progress-primary"
                >
                  {percentage}
                </progress>
              </div>
            );
          })}
          {/* <div className="col-12 col-lg-6"></div> */}
        </div>
      </div>
    </>
  );
};

export default Skill;
