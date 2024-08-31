import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import { ContactContainer } from './ContactContainer'
import SocialNet from './SocialNet'

const Sidebar = () => {
  return <aside id="sidebar">
        <img src={Avatar} alt="" />
        <p className="title">Desenvolvedor Web</p>
        <SocialNet/>
        <ContactContainer/>
        <a href="https://drive.google.com/file/d/1hZFilGusKyhfZdMDSYnaDEnoadXzV0Co/view?usp=drive_link" className="btn">Dowload Curriculo</a>
  </aside>

}

export default Sidebar