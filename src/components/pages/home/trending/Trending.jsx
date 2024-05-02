import React from 'react'
import l from './Trending.module.css'
import main_tr1 from '../../../../assets/images/main_tr1.png'
import main_tr2 from '../../../../assets/images/main_tr2.png'
import main_tr3 from '../../../../assets/images/main_tr3.png'
import mini_tr1 from '../../../../assets/images/mini_tr1.png'
import mini_tr2 from '../../../../assets/images/mini_tr2.png'
import mini_tr3 from '../../../../assets/images/mini_tr3.png'
import mini_tr4 from '../../../../assets/images/mini_tr4.png'
import mini_tr5 from '../../../../assets/images/mini_tr5.png'
import mini_tr6 from '../../../../assets/images/mini_tr6.png'
import avatar1 from '../../../../assets/icons/Avatar1.svg'
import avatar2 from '../../../../assets/icons/Avatar2.svg'
import avatar3 from '../../../../assets/icons/Avatar3.svg'

function Trending() {
  return (
    <div className={l.trending}>
      <div className="container">
        <h1 className={l.title}>Trending Collection</h1>
        <p className={l.text}>Checkout our weekly updated trending collection.</p>
        <div className={l.trending_content}>
          <div className={l.card}>
            <img className={l.main_tr} src={main_tr1} alt="" />
            <div className={l.photo_box}>
              <img className={l.mini_photo} src={mini_tr1} alt="" />
              <img className={l.mini_photo} src={mini_tr2} alt="" />
              <div className={l.number_box}>1025+</div>
            </div>
            <h1 className={l.mini_title}>DSGN Animals</h1>
            <div className={l.user_box}>
              <img src={avatar1} alt="" />
              <p className={l.user_name}>MrFox</p>
            </div>
          </div>
          <div className={l.card}>
            <img className={l.main_tr} src={main_tr2} alt="" />
            <div className={l.photo_box}>
              <img className={l.mini_photo} src={mini_tr3} alt="" />
              <img className={l.mini_photo} src={mini_tr4} alt="" />
              <div className={l.number_box}>1025+</div>
            </div>
            <h1 className={l.mini_title}>Magic Mushrooms</h1>
            <div className={l.user_box}>
              <img src={avatar2} alt="" />
              <p className={l.user_name}>Shroomie</p>
            </div>
          </div>
          <div className={l.card}>
            <img className={l.main_tr} src={main_tr3} alt="" />
            <div className={l.photo_box}>
              <img className={l.mini_photo} src={mini_tr5} alt="" />
              <img className={l.mini_photo} src={mini_tr6} alt="" />
              <div className={l.number_box}>1025+</div>
            </div>
            <h1 className={l.mini_title}>Disco Machines</h1>
            <div className={l.user_box}>
              <img src={avatar3} alt="" />
              <p className={l.user_name}>BeKind2Robots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending