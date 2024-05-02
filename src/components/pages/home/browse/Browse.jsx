import React from 'react'
import l from './Browse.module.css'
import item1 from '../../../../assets/icons/PaintBrush.svg'
import item2 from '../../../../assets/icons/Swatches.svg'
import item3 from '../../../../assets/icons/MusicNotes.svg'
import item4 from '../../../../assets/icons/Camera.svg'
import item5 from '../../../../assets/icons/VideoCamera.svg'
import item6 from '../../../../assets/icons/MagicWand.svg'
import item7 from '../../../../assets/icons/Basketball.svg'
import item8 from '../../../../assets/icons/Planet.svg'

function Browse() {
  return (
    <div className={l.browse}>
       <div className="container">
          <h1 className={l.title}>Browse Categories</h1>
          <div className={l.row}>
            <div className={l.card1}>
                <img className={l.card_item} src={item1} alt="" />
                <h1 className={l.card_title}>Art</h1>
            </div>
            <div className={l.card2}>
                <img className={l.card_item} src={item2} alt="" />
                <h1 className={l.card_title}>Collectibles</h1>
            </div>
            <div className={l.card3}>
                <img className={l.card_item} src={item3} alt="" />
                <h1 className={l.card_title}>Music</h1>
            </div>
            <div className={l.card4}>
                <img className={l.card_item} src={item4} alt="" />
                <h1 className={l.card_title}>Photography</h1>
            </div>
            <div className={l.card5}>
                <img className={l.card_item} src={item5} alt="" />
                <h1 className={l.card_title}>Video</h1>
            </div>
            <div className={l.card6}>
                <img className={l.card_item} src={item6} alt="" />
                <h1 className={l.card_title}>Utility</h1>
            </div>
            <div className={l.card7}>
                <img className={l.card_item} src={item7} alt="" />
                <h1 className={l.card_title}>Sport</h1>
            </div>
            <div className={l.card8}>
                <img className={l.card_item} src={item8} alt="" />
                <h1 className={l.card_title}>Virtual Worlds</h1>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Browse
