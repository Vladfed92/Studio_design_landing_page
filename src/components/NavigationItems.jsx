import navItems from '../data/navItems.js'
import style from '../websiteParts/Header.module.css'
import useToggle from '../functions/useToggle.js'

function NavigationItems() {
  const [toggle, setToggle] = useToggle() // ????????????????????????????????????
  const items = Object.keys(navItems)
  return (
    <>
      <div
        className={`${style.burger} ${toggle && style.active_burger}`}
        onClick={setToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${style.navigation_refs} ${
          toggle && style.toggle_nav_menu
        }`}
      >
        {items.map((item, index) => {
          return (
            <li className={style.ref} key={index}>
              <a href="">{item}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NavigationItems
