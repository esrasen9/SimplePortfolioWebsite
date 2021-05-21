import React from 'react';

const SkillsSection = ({skillTitle,progress,grade}) => {
      return (
          <div className="SkillsSection">
              <div className="container">
                  <div className="skills">
                      <h5 className="skill-title">
                          {skillTitle}
                      </h5>
                      <div className="skill-bar">
                          <p className="skill-progress-text">
                              {progress}
                          </p>
                          <div className="skill-progress">
                              <div className="progressbar">
                                  <div className="inner-progressbar"
                                       style={{width:grade}}>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
}

export default SkillsSection;