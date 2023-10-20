import style from './Header.module.css'
import logo from '../img/logo.png'
import NavigationItems from '../components/NavigationItems.jsx'

function Header() {
  return (
    <header>
      <nav>
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Header
