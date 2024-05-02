import React from 'react'
import l from "./Footer.module.css"
import logo from "../../../assets/icons/logo.svg"
import discord from "../../../assets/icons/Discord.svg"
import instagram from "../../../assets/icons/Instagram.svg"
import twitter from "../../../assets/icons/Twitter.svg"
import youtube from "../../../assets/icons/YouTube.svg"

function Footer() {
  return (
    <div className={l.footer}>
      <div className="container">
        <ul className={l.f_item}>
          <li className={l.f_list}>
          <a className={logo} href=""> <img src={logo} alt="" /> </a>
          </li>
          <li className={l.f_list}>
            <a className={l.f_link} href="">Explore</a>
          </li>
           <li className={l.f_list}>
            <a className={l.f_link} href="">Join Our Weekly Digest</a>
           </li>
        </ul>
        <div className={l.ul_box}>
        <ul className={l.item_text1}>
          <li className={l.item_list}>
            <a className={l.item_link} href="">NFT marketplace UI created with Anima for Figma.</a>
          </li>
          <li className={l.item_list}>
          <a className={l.item_link} href="">Join our community</a> 
          </li>
          <div className={l.img_box}>
            <img className={l.social} src={discord} alt="" />
            <img className={l.social} src={instagram} alt="" />
            <img className={l.social} src={twitter} alt="" />
            <img className={l.social4} src={youtube} alt="" />
          </div>
        </ul>
        <ul className={l.item_text2}>
          <li className={l.item_list2}>
            <a className={l.item_link2} href="">Marketplace</a>
          </li>
          <li className={l.item_list2}>
            <a className={l.item_link2} href="">Rankings</a>
          </li>
          <li className={l.item_list2}>
            <a className={l.item_link2} href="">Connect a wallet</a>
          </li>
        </ul>
        <div className={l.item_box3}>
        <a className={l.link3} href="">Get exclusive promotions & updates <br /> straight to your inbox.</a>
        <div className={l.input_box}>
          <input className={l.input} type="text" placeholder='Enter your email here' />
          <button className={l.btn}>Subscribe</button>
        </div>
        </div>
        </div>
        <hr className={l.line}/>
        <p className={l.text}>NFT Market. Use this template freely.</p>
      </div>
    </div>
  )
}

export default Footer
