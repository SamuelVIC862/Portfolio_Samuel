import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiSass,
    DiSqllite,
    DiReact

} from 'react-icons/di'

import '../styles/components/technologiescont.sass'

const technologies = [
    { id: "html", name: "Html5", desc:"Tecnologia utilizada como base para a criação dos projetos Web." , icon: <DiHtml5 /> },
    { id: "css", name: "Css3", desc:"Tecnologia utilizada como base para a estilização dos projetos Web." ,  icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", desc:"Principal linguagem utilizada no desenvolvimento de projetos em geral." ,  icon: <DiJsBadge /> },
    { id: "sass", name: "Sass", desc:"Tecnologia utilizada em projetos para melhor estilização com Css3." ,  icon: <DiSass /> },
    { id: "sql", name: "Sqllite", desc:"Banco de Dados utilizado em projetos direcionados ao Back-End." ,  icon: <DiSqllite /> },
    { id: "react", name: "React", desc:"Principal framework utilizado em projetos de desenvolvimento e acadêmicos." , icon: <DiReact /> }
]

const TechnologiesContainer = () => {
    return <section className='technologies_cont'>
        <h2>Conhecimentos</h2>
        <div className='technologies_grid'>
            {technologies.map((tech) => (
                <div className="tech_card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tech_info">
                        <h3>{tech.name}</h3>
                        <p>{tech.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>

}

export default TechnologiesContainer