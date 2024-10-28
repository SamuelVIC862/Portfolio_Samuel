import Project1 from '/img/image.png'
import Project2 from '/img/RNCoders.png'
import Project3 from '/img/Venaculo.png'


import '../styles/components/projectscontainer.sass'
import { RiProjector2Fill } from 'react-icons/ri'

const projects = [
    { id: "1", name: "Portfólio", image: Project1, link:"https://github.com/SamuelVIC862/Portfolio_Samuel", desc: "Este projeto de portfólio foi desenvolvido para apresentar, de forma detalhada, meus conhecimentos e habilidades como desenvolvedor web. Nele, você encontrará uma visão abrangente das minhas competências técnicas, experiência em diferentes tecnologias, e exemplos de projetos nos quais trabalhei, destacando minha capacidade de criar soluções web eficazes e inovadoras." },
    { id: "2", name: "RN Coders", image: Project2, link:"#", desc: " Um projeto web profissional desenvolvido com React e Next.js, focado em proporcionar uma experiência de navegação fluida e visualmente atraente. Utilizando Tailwind CSS para estilização, este projeto incorpora animações interativas para aprimorar a experiência do usuário. Além disso, a estrutura modular facilita a manutenção e a escalabilidade, permitindo uma personalização rápida de acordo com os requisitos do cliente." },
    {id: "3", name:"Vernaculo", image: Project3, link:"#", desc:"Projeto acadêmico profissional voltado para a criação de uma página informativa e educativa. Desenvolvido com React e Next.js, ele integra diversas funcionalidades, incluindo chamadas para o backend para fornecer dados dinâmicos. A aplicação utiliza hooks de React para gerenciar listagens e validar entradas, proporcionando uma interface intuitiva e responsiva. Esse projeto destaca-se por sua capacidade de organizar e exibir informações acadêmicas de forma clara e acessível ao usuário."},
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