import Project1 from '../img/image.png'
import Project0 from '../img/projectbases.png'

import '../styles/components/projectscontainer.sass'

const projects = [
    { id: "1", name: "Portfólio", image: Project1, link:"https://github.com/SamuelVIC862/Portfolio_Samuel", desc: "Este projeto de portfólio foi desenvolvido para apresentar, de forma detalhada, meus conhecimentos e habilidades como desenvolvedor web. Nele, você encontrará uma visão abrangente das minhas competências técnicas, experiência em diferentes tecnologias, e exemplos de projetos nos quais trabalhei, destacando minha capacidade de criar soluções web eficazes e inovadoras." },
    { id: "2", name: "Em Construção", image: Project0, link:"https://github.com/SamuelVIC862", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    //{id:"3", name:"Test", image:"", link:"https://github.com/SamuelVIC862", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    ]

const ProjectsContainer = () => {
    return <section className="projects_cont">
        <h2>Projetos</h2>
        <div className='projects_grid'>
            {projects.map((project) => (
                <a href={project.link} className="project_card" id={project.id} key={project.id}>
                    <div className="box_img" style={{
                        backgroundImage: `url(${project.image})`
                    }}>
                    </div>
                    <div className="project_info">
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                    </div>
                </a>
            ))}
        </div>
    </section>
}

export default ProjectsContainer