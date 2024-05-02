import React from 'react'
import l from "./Discover.module.css"
import rocket from '../../../../assets/icons/RocketLaunch.svg'
import dicover from '../../../../assets/images/dicover.png'

function Discover() {
  return (
    <div className={l.discover}>
      <div className="container">
        <div className={l.discover_content}>
          <div className={l.one}>
            <h1 className={l.title}>Discover digital art & Collect NFTs</h1>
            <p className={l.text}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <button type='button' className={l.btn}>
              <img src={rocket} alt="" />
              Get Started
            </button>
            <div className={l.total}>
              <div className={l.total_content}>
                <h1 className={l.total_title}>240k+</h1>
                <p className={l.total_text}>Total Sale</p>
              </div>
              <div className={l.total_content}>
                <h1 className={l.total_title}>100k+</h1>
                <p className={l.total_text}>Auctions</p>
              </div>
              <div className={l.total_content}>
                <h1 className={l.total_title}>240k+</h1>
                <p className={l.total_text}>Artists</p>
              </div>
            </div>
          </div>
          <div className={l.two}>
            <img className={l.photo} src={dicover} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
