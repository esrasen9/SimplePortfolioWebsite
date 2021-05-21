import React from 'react';
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import design from "../img/web-design.svg"
import gamedev from "../img/game-hero.svg";
import intelligence from "../img/artificial-int-6.png";

const AboutPage = () => {
      return (
          <div className="AboutPage">
              <div className="about-section">
                  <Title title="About Me"/>
                  <ImageSection/>
              </div>
              <div className="my-skills-section">
                  <Title title="My Skills"/>
                  <div className="skills-container">
                      <SkillsSection
                          skillTitle="Javascript"
                          progress="70%"
                          grade="70%"
                      />
                      <SkillsSection
                          skillTitle="Java"
                          progress="90%"
                          grade="90%"
                      />
                      <SkillsSection
                          skillTitle="Python"
                          progress="50%"
                          grade="50%"
                      />
                      <SkillsSection
                          skillTitle="Web Design"
                          progress="30%"
                          grade="30%"
                      />
                      <SkillsSection
                          skillTitle="React JS"
                          progress="72%"
                          grade="72%"
                      />
                      <SkillsSection
                          skillTitle="UI/UX Design"
                          progress="77%"
                          grade="77%"
                      />
                      <SkillsSection
                          skillTitle="Node JS"
                          progress="64%"
                          grade="64%"
                      />
                      <SkillsSection
                          skillTitle="C#"
                          progress="86%"
                          grade="86%"
                      />
                  </div>
              </div>
              <div className="services-section">
                  <Title title="Services"/>
                  <div className="services-container">
                      <ServicesSection image={design}
                                       title="Web Design"
                                       text="Lorem ipsum dolor sit amet, consectetur
                                   adipisicing elit."/>

                      <ServicesSection image={intelligence}
                                       title="Artificial Intelligence"
                                       text="Lorem ipsum dolor sit amet, consectetur
                                   adipisicing elit."/>
                      <ServicesSection image={gamedev}
                                       title="Game Development"
                                       text="Lorem ipsum dolor sit amet, consectetur
                                   adipisicing elit."/>
                  </div>
              </div>
          </div>
      );
}


export default AboutPage;