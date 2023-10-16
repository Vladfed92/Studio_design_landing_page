import App from '../App'
import style from './Footer.module.css'
import logo from '../img/logo.png'
import facebook from '../img/footer/facebook.png'
import twitter from '../img/footer/twitter.png'
import linkindin from '../img/footer/linkedin.png'

function Footer() {
  return (
    <footer>
      <div className={style.footer_info}>
        <div className={style.footer_short_info}>
          <a href="">
            <img src={logo} alt="" className={style.footer_logo} />
          </a>
          <p className={style.footer_short_info}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className={style.media}>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={linkindin} alt="" />
            </a>
          </div>
        </div>
        <div className={style.footer_lincs}>
          <ul>
            <h4>What We Do</h4>
            <li>Web Design </li>
            <li>App Design</li>
            <li>Social Media Manage</li>
            <li>Market Analysis Project</li>
          </ul>
          <ul>
            <h4>Company</h4>
            <li>
              <a href="">About Us</a>{' '}
            </li>
            <li>
              <a href="">Career</a>{' '}
            </li>
            <li>
              <a href="">Become Investor</a>
            </li>
          </ul>
          <ul>
            <h4>Support</h4>
            <li>
              <a href="">FAQ </a>
            </li>
            <li>
              <a href="">Policy</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
          </ul>
          <ul>
            <h4>Contact</h4>
            <li>
              <a href="">WhatsApp</a>{' '}
            </li>
            <li>
              <a href="">Support 24</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={style.copytights}>Copyright © 2022 Avi Yansah</p>
    </footer>
  )
}

export default Footer
