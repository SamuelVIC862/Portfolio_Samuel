

import '../styles/components/projectscontainer.sass'

const projects = [
    {id:"1", name:"", image:"", desc:""},
]

const ProjectsContainer = () => {
  return <section className="projects_cont">
    <h2>Projetos</h2>
    <div className='projects_grid'>
            {projects.map((project) => (
                <div className="project_card" id={project.id} key={project.id}>
                    <img src={project.image} alt="" />
                    <div className="project_info">
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                    </div>
                </div>
            ))}
        </div>
  </section>
}

export default ProjectsContainer