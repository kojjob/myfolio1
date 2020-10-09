import React from "react";
import {StyledAbout} from "../styled/stylings";

const About = () => {
  return (
    <>
      <StyledAbout>
        <section className="about">
          <div className="container">
            <div className="about-card">
              <div className="about-card__title">
                <h1>Kojo Kwakye</h1>
              </div>
              <div className="about-card__subtitle">
                <h2>Software Developer</h2>
              </div>
              <div className="about-card__desc">
                <p>
                  I am fascinated by technology and the advancements in
                  technology, and an ardent believer in continuous learning of
                  both technical and soft skills to improve my ability to
                  deliver great software solutions.
                </p>
              </div>
              {/* <StyledButton> */}
                <button>View my projects</button>
              {/* </StyledButton> */}
            </div>
          </div>
        </section>
      </StyledAbout>
    </>
  );
};

export default About;
