import style from './Main.module.css'
import main_img from '../img/main/main_image.png'
import dots from '../img/main/Dots.png'
import google_icon from '../img/our_clients/Google_Logo.png'
import airbnb_icon from '../img/our_clients/Airbnb_Logo.png'
import uber_icon from '../img/our_clients/Uber_Eats_Logo.png'
import amazon_icon from '../img/our_clients/Amazon_Logo.png'
import icon1 from '../img/halp_your_busines/box-search_1.png'
import icon2 from '../img/halp_your_busines/chart-square 1.png'
import icon3 from '../img/halp_your_busines/code-1 1.png'
import icon4 from '../img/halp_your_busines/empty-wallet 1.png'
import main_video from '../img/since_2016/video.mp4'

function Main() {
  return (
    <main>
      {/* --------------------------------- MAIN - INFO */}
      <div className={style.main}>
        <div className={style.main_info}>
          <h1 className={style.main_title}>A Digital Product Agency</h1>
          <p className={style.main_subtitle}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className={style.button}>Contact Now</button>
          <img src={dots} className={style.dots} />
        </div>
        <div className={style.main_img}>
          <img src={main_img} alt="" />
        </div>
      </div>
      {/*  --------------------------------- CLIENTS - INFO */}
      <div className={style.our_clients}>
        <div className={style.clients_info}>
          <h3 className={style.clients_title}>Our Client</h3>
          <p className={style.clients_subtitle}>
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className={style.clients_icons}>
          <a href="">
            <img src={google_icon} alt="" />
          </a>
          <a href="">
            <img src={airbnb_icon} alt="" />
          </a>
          <a href="">
            <img src={uber_icon} alt="" />
          </a>
          <a href="">
            <img src={amazon_icon} alt="" />
          </a>
        </div>
      </div>
      {/*  --------------------------------- HELP - INFO */}
      <div className={style.help}>
        <div className={style.help_info}>
          <h3 className={style.help_title}>How can we help your Business ?</h3>
          <p className={style.help_subtitle}>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <img src={dots} className={style.dots} />
        </div>
        <div className={style.help_tips}>
          <div className={style.tip}>
            <div className={style.tips_icon}>
              <img src={icon1} alt="" />
            </div>
            <h4 className={style.tip_title}>Business Idea Planning</h4>
            <p className={style.tip_subtitle}>
              We present you a proposal and discuss niffty-gritty like
            </p>
          </div>
          <div className={style.tip}>
            <div className={style.tips_icon}>
              <img src={icon3} alt="" />
            </div>
            <h4 className={style.tip_title}>Development Website and App</h4>
            <p className={style.tip_subtitle}>
              Communication protocols apart from engagement models
            </p>
          </div>
          <div className={style.tip}>
            <div className={style.tips_icon}>
              <img src={icon4} alt="" />
            </div>
            <h4 className={style.tip_title}>Financial Planning System</h4>
            <p className={style.tip_subtitle}>
              Protocols apart from aengage models, pricing billing
            </p>
          </div>
          <div className={style.tip}>
            <div className={style.tips_icon}>
              <img src={icon2} alt="" />
            </div>
            <h4 className={style.tip_title}>Market Analysis Project</h4>
            <p className={style.tip_subtitle}>
              Protocols apart from aengage models, pricing billing
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------------- DIGITAL-PRODUCT - INFO */}
      <div className={style.digital_product}>
        <div className={style.video}>
          <video
            src={main_video}
            width="540"
            height="372"
            controls="controls"
          />
        </div>
        <div className={style.digital_info}>
          <h3 className={style.digital_title}>
            Great Digital Product Agency since 2016
          </h3>
          <p className={style.digital_subtitle}>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Main