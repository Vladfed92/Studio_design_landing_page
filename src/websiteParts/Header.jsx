import style from './Header.module.css'
import logo from '../img/logo.png'

function Header() {
  return (
    <header>
      <nav>
        <a href="">
          <img src={logo} alt="Logo"/>
        </a>
        <ul className={style.navigation_refs}>
          <li className={style.ref}>
            <a href="">Home</a>
          </li>
          <li className={style.ref}>
            <a href="">What We Do</a>
          </li>
          <li className={style.ref}>
            <a href="">Service</a>
          </li>
          <li className={style.ref}>
            <a href="">Project</a>
          </li>
          <li className={style.ref}>
            <a href="">Blog</a>
          </li>
          <li className={style.ref}>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
