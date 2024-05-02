import l from "./Navbar.module.css"
import logo from "../../../assets/icons/logo.svg"
import user from "../../../assets/icons/user.svg"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
      <div className={l.navbar}>
          <div className="container">
            <nav className={l.nav}>
                <NavLink to="/" className={l.logo}>
                    <img src={logo} alt="" />
                </NavLink>
                <ul className={l.item}>
                    <li className={l.list}>
                        <NavLink to="/market" className={l.link}>Marketplace</NavLink>
                    </li>
                    <li className={l.list}>
                        <NavLink to="/rankings" className={l.link}>Rankings</NavLink>
                    </li>
                    <li className={l.list}>
                        <NavLink to="/wallet" className={l.link}>Connect a wallet</NavLink>
                    </li>
                    <li className={l.list}>
                        <NavLink to="/account" className={l.link}> <img src={user} alt="" /> Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
          </div>
      </div>
  )
}

export default Navbar
