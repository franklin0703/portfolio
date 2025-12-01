import {projectDetail} from "./data";

function Projects() {

  return (
    <section id="projects" className="projects section reveal">
      <h2>Projects</h2>
      <div className="grid">
        {
          projectDetail.map((arrayData,index) => (
            <div className="card" key={index}>
              <h3>{arrayData.title}</h3>
              <p className="card-tag">{arrayData.programs}</p>
              <p>
                {arrayData.details}
              </p>
            </div>
          ))
        }
       
      </div>
    </section>
  );
}

export default Projects;
