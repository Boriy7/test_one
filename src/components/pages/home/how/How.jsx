import React from 'react'
import l from "./How.module.css"
import icon1 from '../../../../assets/images/icon1.png'
import icon2 from '../../../../assets/images/icon2.png'
import icon3 from '../../../../assets/images/icon3.png'

function How() {
  return (
    <div className={l.how}>
      <div className="container">
        <h1 className={l.title}>How It Works</h1>
        <p className={l.text}>Find Out How To Get Started</p>
        <div className={l.row}>
            <div className={l.card}>
                <img className={l.card_img} src={icon1} alt="" />
                <h1 className={l.card_title}>Setup Your Wallet</h1>
                <p className={l.card_text}>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
            </div>
            <div className={l.card}>
                <img className={l.card_img} src={icon2} alt="" />
                <h1 className={l.card_title}>Create Collection</h1>
                <p className={l.card_text}>Upload your work and setup your collection. Add a description, social links and floor price.</p>
            </div>
            <div className={l.card}>
                <img className={l.card_img} src={icon3} alt="" />
                <h1 className={l.card_title}>Start Earning</h1>
                <p className={l.card_text}>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default How
