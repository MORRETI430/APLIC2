import React, { useState } from 'react'
import './Cart.css'
import remove from '../../assets/icon-delete.svg'

export const Cart = ({ cartList, setCartList }) => {

    const removeItem = () => {
        const updatedCartList = cartList.filter((prod) => prod.name !== "Fall Limited Edition Sneakers");
        setCartList(updatedCartList);
    }

    return (
        <div className="cart">
            <div className="title">
                <p>Cart</p>
            </div>
            <div className="cart-prods">
                {cartList.map((prod) => {
                    return (
                        <div className='prod-cont' key={cartList.length - 1}>
                            <div className="img" style={{ backgroundImage: `url(${prod.img})` }}></div>
                            <div className="text">
                                <p>{prod.name}</p>
                                <div className="price">
                                    <p>${prod.price}.00</p>
                                    <p>x{prod.cant}</p>
                                    <p>${prod.price * prod.cant}.00</p>
                                </div>
                            </div>
                            <img src={remove} alt="delete icon" onClick={removeItem} className='remove' />
                        </div>
                    )
                })}
                {cartList.length > 0 ? <button className='checkout'>Checkout</button> : ""}
            </div>
        </div>
    )
}
