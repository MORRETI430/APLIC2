import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import cartIcon from '../../assets/icon-cart.svg'
import fyp from '../../assets/image-avatar.png'
import navIcon from '../../assets/icon-menu.svg'
import close from '../../assets/icon-close.svg'
import { Cart } from '../Cart/Cart'

export const NavBar = ({ cartList, setCartList }) => {

  const [nav, setNav] = useState(false)
  const [cart, setCart] = useState(false)

  const openNav = () => {
    setNav(true)
    document.body.classList.add('nav-open')
  }

  const closeNav = () => {
    setNav(false)
    document.body.classList.remove('nav-open')
  }

  const viewCart = () => {
    setCart(true)
  }

  const hideCart = () => {
    setCart(false)
  }

  return (
    <nav className="navbar">
      <div className="content-1">
        <img src={navIcon} alt="nav icon" className='opnNav' onClick={openNav} />
        <img src={logo} alt="sneakers logo" />
        <ul className={nav ? "ul-2" : "ul"}>
          <img src={close} alt="close icon" className='close' onClick={closeNav} />
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="content-2">
        <p className={cartList.length > 0 ? 'cart-cant' : 'cart-null'}>{cartList.length > 0 ? cartList.map((prod) => prod.cant) : ""}</p>
        <img src={cartIcon} alt="cart icon" onClick={cart ? hideCart : viewCart} />
        <img src={fyp} alt="user fyp" />
        {cart ? <Cart cartList={cartList} setCartList={setCartList}></Cart> : ""}
      </div>
      <div className={nav ? "opacity-open" : "opacity"}>
      </div>
    </nav>
  )
}
