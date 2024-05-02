import React from 'react'
import l from './Creators.module.css'
import Rocket from "../../../../assets/icons/Rocket.svg"
import Assist1 from "../../../../assets/icons/Assist1.svg"
import Assist2 from "../../../../assets/icons/Assist2.svg"
import Assist3 from "../../../../assets/icons/Assist3.svg"
import Assist4 from "../../../../assets/icons/Assist4.svg"
import Assist5 from "../../../../assets/icons/Assist5.svg"
import Assist6 from "../../../../assets/icons/Assist6.svg"
import Assist7 from "../../../../assets/icons/Assist7.svg"
import Assist8 from "../../../../assets/icons/Assist8.svg"
import Assist9 from "../../../../assets/icons/Assist9.svg"
import Assist10 from "../../../../assets/icons/Assist10.svg"
import Assist11 from "../../../../assets/icons/Assist11.svg"
import Assist12 from "../../../../assets/icons/Assist12.svg"

function Creators() {
  return (
    <div className={l.creators}>
        <div className="container">
            <div className={l.big_box}>
             <div className={l.box}>
                <h1 className={l.title}>Top Creators</h1>
                  <p className={l.text}>Checkout Top Rated Creators On The NFT Marketplace</p>
             </div>
                  <div className={l.mini_box}>
                    <button type='button' className={l.btn}> <img src={Rocket} alt="" /> View Rankings </button>
                  </div>
            </div>
             <div className={l.row}>
                <div className={l.card}>
                    <img className={l.assist} src={Assist1} alt="" />
                    <h1 className={l.assist_name}>Keepitreal</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist2} alt="" />
                    <h1 className={l.assist_name}>DigiLab</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist3} alt="" />
                    <h1 className={l.assist_name}>GravityOne</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist4} alt="" />
                    <h1 className={l.assist_name}>Juanie</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist5} alt="" />
                    <h1 className={l.assist_name}>BlueWhale</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist6} alt="" />
                    <h1 className={l.assist_name}>Mr fox</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist7} alt="" />
                    <h1 className={l.assist_name}>Shroomie</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist8} alt="" />
                    <h1 className={l.assist_name}>robotica</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist9} alt="" />
                    <h1 className={l.assist_name}>RustyRobot</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist10} alt="" />
                    <h1 className={l.assist_name}>Animakid</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist11} alt="" />
                    <h1 className={l.assist_name}>Dotgu</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
                <div className={l.card}>
                    <img className={l.assist} src={Assist12} alt="" />
                    <h1 className={l.assist_name}>Ghiblier</h1>
                    <p className={l.card_text}>Total Sales: <p>34.53 ETH</p> </p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Creators
