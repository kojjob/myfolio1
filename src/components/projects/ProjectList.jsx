import React from 'react';
import {StyledProjectList} from "../styled/stylings";



const ProjectList = () => {

  return (
    <>
      <StyledProjectList>
        <section>
          <div className="projects container">
            <div className="project-title">
              <h1>Projects</h1>
            </div>
            <div className="project-image">image here</div>
            <div className="project-desc">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                numquam veritatis culpa mollitia ut modi exercitationem laborum,
                ullam amet porro, quod tenetur provident quo asperiores!
              </p>
            </div>
            <button>Read more</button>
          </div>
        </section>
      </StyledProjectList>
    </>
  );
}

export default ProjectList;