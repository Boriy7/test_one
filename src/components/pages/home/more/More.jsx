import React from 'react'
import l from './More.module.css'
import eye from '../../../../assets/icons/Eye.svg'
import card1 from '../../../../assets/images/card1.png'
import card2 from '../../../../assets/images/card2.png'
import card3 from '../../../../assets/images/card3.png'
import more1 from '../../../../assets/icons/more1.svg'
import more2 from '../../../../assets/icons/more2.svg'
import more3 from '../../../../assets/icons/more3.svg'
import highlight from '../../../../assets/images/NFT Highlight.png'

function More() {
  return (
    <div className={l.more}>
      <div className="container">
           <div className={l.big_box}>
             <div className={l.box}>
                <h1 className={l.title}>Discover More NFTs</h1>
                  <p className={l.text}>Explore New Trending NFTs</p>
             </div>
                  <div className={l.mini_box}>
                    <button className={l.btn}> <img src={eye} alt="" /> See All </button>
                  </div>
            </div>
         <div className={l.row}>
            <div className={l.card}>
                <img className={l.card_img} src={card1} alt="" />
                <h1 className={l.card_title}>Distant Galaxy</h1>
                <div className={l.user_box}>
                    <img src={more1} alt="" />
                    <p className={l.user_name}>MoonDancer</p>
                </div>
                    <h2 className={l.props}>Price <h2>Highest Bid</h2> </h2>
                    <p className={l.result}>1.63 ETH <p>0.33 wETH</p> </p>    
            </div>
            <div className={l.card}>
                <img className={l.card_img} src={card2} alt="" />
                <h1 className={l.card_title}>Life On Edena</h1>
                <div className={l.user_box}>
                    <img src={more2} alt="" />
                    <p className={l.user_name}>NebulaKid</p>
                </div>
                    <h2 className={l.props}>Price <h2>Highest Bid</h2> </h2>
                    <p className={l.result}>1.63 ETH <p>0.33 wETH</p> </p>    
            </div>
            <div className={l.card}>
                <img className={l.card_img} src={card3} alt="" />
                <h1 className={l.card_title}>AstroFiction</h1>
                <div className={l.user_box}>
                    <img src={more3} alt="" />
                    <p className={l.user_name}>Spaceone</p>
                </div>
                    <h2 className={l.props}>Price <h2>Highest Bid</h2> </h2>
                    <p className={l.result}>1.63 ETH <p>0.33 wETH</p> </p>    
            </div>
         </div>
      </div>
      <img className={l.highlight} src={highlight} alt="" />
    </div>
  )
}

export default More
