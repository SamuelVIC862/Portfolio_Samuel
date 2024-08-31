import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import '../styles/components/socialnet.sass'


const socialNet = [
    {nome : "linkedin" , link:"https://www.linkedin.com/in/samuel-victor-a33b91200", icon: <FaLinkedinIn/>},
    {nome : "github" , link:"https://github.com/SamuelVIC862", icon: <FaGithub/>},
    {nome : "instagram" ,link:"https://www.instagram.com/_samuellvictoor/?hl=pt-br", icon: <FaInstagram/>}
]
const SocialNet = () => {
  return <section id="social-networks">
    {socialNet.map((network) => (
        <a href={network.link} className='social-btn' id={network.nome} key={network.nome}>
            {network.icon}
        </a>
    ))}

  </section>
}

export default SocialNet