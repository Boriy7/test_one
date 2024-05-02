import React from 'react'
import l from "./Join.module.css"
import join from '../../../../assets/images/Join.png'
import email from '../../../../assets/icons/email.svg'

function Join() {
  return (
    <div className={l.join}>
      <div className="container">
        <div className={l.box}>
            <div className={l.img_box}>
                <img className={l.box_img} src={join} alt="" />
            </div>
            <div className={l.info_box}>
                <h1 className={l.box_title}>Join Our Weekly Digest</h1>
                <p className={l.box_text}>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
                <div className={l.input_box}>
                    <input className={l.input} type="text" placeholder='Enter your email here'/>
                    <button type='button' className={l.btn}> <img src={email} alt="" /> Subscribe </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Join
