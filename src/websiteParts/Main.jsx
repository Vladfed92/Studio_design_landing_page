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
import main_client from '../img/happy_clients/1.png'
import other_clients_group from '../img/happy_clients/Group 71.png'

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
          <a href="#">
            <button className={style.button}>Contact Now</button>
          </a>
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
      {/* --------------------------------- HAPPY CLIENTS - INFO */}
      <div className={style.happy_clients}>
        <div className={style.happy_clients_info}>
          <h2 className={style.happy_clients_title}>
            What our happy client say
          </h2>
          <p className={style.happy_clients_subtitle}>
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className={style.clients_posts}>
          <div className={style.main_clients_post}>
            <img src={main_client} className={style.main_client_icon} />
            <div className={style.main_client_post_info}>
              <h4 className={style.main_client_post_title}>Matthew Paul</h4>
              <p className={style.main_client_post_subtytle}>
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </p>
            </div>
          </div>
          <div className={style.other_clients}>
            <img
              src={other_clients_group}
              className={style.other_clients_icons}
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- SUBSCRIBE-FORM - INFO */}
      <div className={style.subscribe_form}>
        <div className={style.subscribe_info}>
          <h3 className={style.subscribe_title}>Subscribe Newsletter</h3>
          <p className={style.subscribe_subtitle}>
            I will update good news and promotion service not spam
          </p>
        </div>
        <form action="" method="get">
          <input
            type="email"
            name="email"
            id="email"
            className={style.email_input}
            placeholder="Enter your email address.."
          />
          <input type="submit" className={style.button} value="Contact Now" />
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="497"
          height="292"
          viewBox="0 0 497 292"
          fill="none"
        >
          <path
            d="M7.07175 158.172C-19.0148 80.4252 38.8318 0 120.839 0H422C463.421 0 497 33.5786 497 75V217C497 258.421 463.421 292 422 292H123.901C80.9308 292 42.7643 264.549 29.0954 223.81L7.07175 158.172Z"
            fill="#2639ED"
          />
        </svg>
      </div>
    </main>
  )
}

export default Main
