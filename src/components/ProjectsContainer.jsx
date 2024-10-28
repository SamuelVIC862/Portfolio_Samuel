'use client'
import Project1Image1 from '/img/image.png';

import Project2Image1 from '/img/RNCoders.png';
import Project2Image2 from '/img/RNCoders1.png';
import Project2Image3 from '/img/RNCoders2.png';
import Project2Image4 from '/img/RNCoders3.png';
import Project2Image5 from '/img/RNCoders4.png';
import Project2Image6 from '/img/RNCoders5.png';

import Project3Image1 from '/img/Venaculo.png';
import Project3Image2 from '/img/Venaculo1.png';
import Project3Image3 from '/img/Venaculo2.png';
import Project3Image4 from '/img/Venaculo3.png';
import Project3Image5 from '/img/Venaculo4.png';


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import '../styles/components/projectscontainer.sass';


const projects = [
    {
        id: "1",
        name: "Portfólio",
        images: [Project1Image1],
        link: "https://github.com/SamuelVIC862/Portfolio_Samuel",
        desc: "Este projeto de portfólio foi desenvolvido para apresentar, de forma detalhada, meus conhecimentos e habilidades como desenvolvedor web. Nele, você encontrará uma visão abrangente das minhas competências técnicas, experiência em diferentes tecnologias, e exemplos de projetos nos quais trabalhei, destacando minha capacidade de criar soluções web eficazes e inovadoras."
    },
    {
        id: "2",
        name: "RN Coders",
        images: [Project2Image1, Project2Image2, Project2Image3, Project2Image4, Project2Image5, Project2Image6],
        link: "#",
        desc: "Um projeto web profissional desenvolvido com React e Next.js, focado em proporcionar uma experiência de navegação fluida e visualmente atraente. Utilizando Tailwind CSS para estilização, este projeto incorpora animações interativas para aprimorar a experiência do usuário. Além disso, a estrutura modular facilita a manutenção e a escalabilidade, permitindo uma personalização rápida de acordo com os requisitos do cliente."
    },
    {
        id: "3",
        name: "Vernáculo",
        images: [Project3Image1, Project3Image2, Project3Image3, Project3Image4, Project3Image5],
        link: "#", 
        desc: "Projeto acadêmico profissional voltado para a criação de uma página informativa e educativa. Desenvolvido com React e Next.js, ele integra diversas funcionalidades, incluindo chamadas para o backend para fornecer dados dinâmicos. A aplicação utiliza hooks de React para gerenciar listagens e validar entradas, proporcionando uma interface intuitiva e responsiva. Esse projeto destaca-se por sua capacidade de organizar e exibir informações acadêmicas de forma clara e acessível ao usuário."
    }
];

const ProjectsContainer = () => {
    return (
        <section className="projects_cont">
            <h2>Projetos</h2>
            <div className='projects_grid'>
                {projects.map((project) => (
                    <div className="project_card" id={project.id} key={project.id}>
                        <div className="box_img">
                            <Swiper
                                modules={[Pagination, Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                {project.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`Imagem do projeto ${project.name}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <a href={project.link} className="project_info">
                            <h3>{project.name}</h3>
                            <p>{project.desc}</p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsContainer;