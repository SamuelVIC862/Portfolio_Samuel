import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiSass,
    DiSqllite,
    DiReact

} from 'react-icons/di'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript  } from "react-icons/si";

import '../styles/components/technologiescont.sass'

const technologies = [
    {
        id: "html",
        name: "Html5",
        desc: "HTML5 é essencial para estruturar e organizar o conteúdo das páginas web. Ele oferece uma base sólida para desenvolver projetos, facilitando a implementação de elementos multimídia, links e formulários, tornando o trabalho inicial mais direto.",
        icon: <DiHtml5 />
    },
    {
        id: "css",
        name: "Css3",
        desc: "CSS3 facilita o processo de estilização de forma poderosa, permitindo ao desenvolvedor criar layouts sofisticados e responsivos. Com animações, transições e flexibilidade de layout, CSS3 transforma uma estrutura básica em uma interface moderna e atraente.",
        icon: <DiCss3 />
    },
    {
        id: "js",
        name: "JavaScript",
        desc: "JavaScript é a linguagem principal para desenvolver interatividade na web. Ela oferece grande flexibilidade para implementar funcionalidades como atualizações dinâmicas de conteúdo e comunicação com servidores, ampliando as possibilidades de criação.",
        icon: <DiJsBadge />
    },
    {
        id: "ts",
        name: "TypeScript",
        desc: "TypeScript melhora o desenvolvimento em JavaScript ao adicionar tipagem estática, ajudando a reduzir erros e proporcionando uma base mais robusta para aplicações complexas. Ideal para escalabilidade e colaboração em grandes projetos.",
        icon: <SiTypescript />
    },
    {
        id: "sass",
        name: "Sass",
        desc: "Sass é um pré-processador CSS que torna a estilização mais escalável e organizada. Ele oferece variáveis, mixins e funções que simplificam a manutenção de grandes projetos e ajudam a escrever CSS de forma mais eficiente e lógica.",
        icon: <DiSass />
    },
    {
        id: "sql",
        name: "SQLite",
        desc: "SQLite é um banco de dados leve que oferece simplicidade e eficiência no armazenamento de dados locais. Ideal para projetos menores, ele proporciona uma configuração rápida e é fácil de gerenciar, permitindo focar na lógica do aplicativo.",
        icon: <DiSqllite />
    },
    {
        id: "react",
        name: "React",
        desc: "React é uma biblioteca que revolucionou o desenvolvimento front-end com sua abordagem baseada em componentes e estado. Ela facilita a construção de interfaces dinâmicas e reativas, simplificando a criação e manutenção de projetos complexos.",
        icon: <DiReact />
    },
    {
        id: "tailwind",
        name: "TailWind",
        desc: "Tailwind CSS é um framework utilitário que facilita a criação de designs responsivos. Ele permite estilizar interfaces rapidamente com classes prontas, reduzindo a necessidade de CSS personalizado e aumentando a produtividade.",
        icon: <RiTailwindCssFill />
    },
    {
        id: "next",
        name: "Next.js",
        desc: "Next.js simplifica o desenvolvimento com React ao oferecer renderização do lado do servidor e otimização de performance. Ele é ideal para melhorar a velocidade de carregamento e o SEO, proporcionando uma experiência de desenvolvimento mais fluida.",
        icon: <SiNextdotjs />
    }
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