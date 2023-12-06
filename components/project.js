import Link from "next/link";

// Create a separate component for the project item
const ProjectItem = ({ imgSrc, projectLink, projectTitle, projectCategory }) => (
  <div className="col-lg-4 col-md-6">
    <Link href={projectLink} target="_blank" rel="nofollow">
    <div className="project-item-four">
      <div className="project-thumb-four">
        <img src={imgSrc} alt="" />
        <div className="project-link"><img src="/assets/img/icons/plus_icon.svg" alt="" /></div>
      </div>
      <div className="project-content-four">
        <h3 >{projectTitle}</h3>
        <span>{projectCategory}</span>
      </div>
    </div>
    </Link>
  </div>
);

// Main component for the project section
const Project = (props) => {
  // Define the project data
  return (
    <section id={props.id}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-title section-title-three mb-50 tg-heading-subheading animation-style1">
              <span className="sub-title tg-element-title">{props.title}</span>
              <h2>{props.desc}</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="view-all-btn text-end mb-30">
              {/* <Link href={props.projectLink} className="btn btn-three">See All Projects</Link> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {props.projectData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
