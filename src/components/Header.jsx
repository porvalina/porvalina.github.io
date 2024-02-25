import logo from '../images/logo.png'

export default function Header() {
  return (
  <header className='App-header'>
    <nav>
      <img  className='logo' src={logo}/>
      <ul className='social'>
        <li><a href="https://www.linkedin.com/in/alina-porval-169999146/" target="_blank" rel="noopener noreferrer">Linked In</a></li>
        <li><a href="https://github.com/porvalina" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#sertificates">IT Skills</a></li>
      </ul>
    </nav>
  </header>
)};