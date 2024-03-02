import Avatar from '../img/eu.jpeg'
import '../styles/components/sidebar.sass'
import { ContactContainer } from './ContactContainer'
import SocialNet from './SocialNet'

const Sidebar = () => {
  return <aside id="sidebar">
        <img src={Avatar} alt="" />
        <p className="title">Desenvolvedor Web</p>
        <SocialNet/>
        <ContactContainer/>
        <a href="" className="btn">Dowload Curriculo</a>
  </aside>

}

export default Sidebar