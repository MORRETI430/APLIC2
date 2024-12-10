import React, { useState } from 'react'
import './ProductView.css'
import '../../index.css'
import { ToastContainer, toast } from 'react-toastify';
import { NavBar } from '../../Components/NavBar/NavBar'
import 'react-toastify/dist/ReactToastify.css';
import cart from '../../assets/icon-cart.svg'
import imgProd1 from '../../assets/image-product-1.jpg'
import imgProd2 from '../../assets/image-product-2.jpg'
import imgProd3 from '../../assets/image-product-3.jpg'
import imgProd4 from '../../assets/image-product-4.jpg'
import th1 from '../../assets/image-product-1-thumbnail.jpg'
import th2 from '../../assets/image-product-2-thumbnail.jpg'
import th3 from '../../assets/image-product-3-thumbnail.jpg'
import th4 from '../../assets/image-product-4-thumbnail.jpg'
import previus from '../../assets/icon-previous.svg'
import next from '../../assets/icon-next.svg'

export const ProductView = () => {

  const [img, setImg] = useState(imgProd1)
  const [contador, setContador] = useState(1)
  const [cartList, setCartList] = useState([])

  const add = () => {
    setContador(contador + 1)
  }

  const remove = () => {
    if (contador === 1) {
      setContador(1)
    } else {
      setContador(contador - 1)
    }
  }

  const setImg1 = () => { setImg(imgProd1) }
  const setImg2 = () => { setImg(imgProd2) }
  const setImg3 = () => { setImg(imgProd3) }
  const setImg4 = () => { setImg(imgProd4) }

  const nextCarousel = () => {
    if (img === imgProd1) { setImg(imgProd2) }
    else if (img === imgProd2) { setImg(imgProd3) }
    else if (img === imgProd3) { setImg(imgProd4) }
  }

  const previusCarousel = () => {
    if (img === imgProd2) { setImg(imgProd1) }
    else if (img === imgProd3) { setImg(imgProd2) }
    else if (img === imgProd4) { setImg(imgProd3) }
  }

  const addToCart = () => {

    const existingProductIndex = cartList.findIndex((prod) => prod.name === "Fall Limited Edition Sneakers");

    if (existingProductIndex !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList[existingProductIndex].cant += contador;
      setCartList(updatedCartList);
    } else {

      const prod = {
        name: "Fall Limited Edition Sneakers",
        price: 125,
        img: imgProd1,
        cant: contador
      };

      if (prod.cant > 0) {
        const updatedCartList = [...cartList, prod];
        setCartList(updatedCartList);
      }
    }
  }

  const notify = () => toast.success("Product Added Succesfully")

  const addBtn = () => {
    addToCart()
    notify()
  }

  return (
    <section className="productView">
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <NavBar cartList={cartList} setCartList={setCartList}></NavBar>
      <div className="product-container">
        <div className="product-content-1">
          <div className="img-main" style={{ backgroundImage: `url(${img})` }}>
            <img src={previus} className='car-btn previus' onClick={previusCarousel} alt="previus icon" />
            <img src={next} className='car-btn next' onClick={nextCarousel} alt="next icon" />
          </div>
          <div className="img-select">
            <div className={img === imgProd1 ? "selected" : "select"} style={{ backgroundImage: `url(${th1})` }} onClick={setImg1}></div>
            <div className={img === imgProd2 ? "selected" : "select"} style={{ backgroundImage: `url(${th2})` }} onClick={setImg2}></div>
            <div className={img === imgProd3 ? "selected" : "select"} style={{ backgroundImage: `url(${th3})` }} onClick={setImg3}></div>
            <div className={img === imgProd4 ? "selected" : "select"} style={{ backgroundImage: `url(${th4})` }} onClick={setImg4}></div>
          </div>
        </div>
        <div className="product-content-2">
          <p>SNEAKER COMPANY</p>
          <h3>Fall Limited Edition Sneakers</h3>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="price">
            <div className="p-2">
              <p>$125.00</p>
              <p>50%</p>
            </div>
            <p className='offert'>$250.00</p>
          </div>
          <div className="buttons">
            <div className="more-less">
              <button className="less" onClick={remove}>-</button>
              <p>{contador}</p>
              <button className="more" onClick={add}>+</button>
            </div>
            <button className='add' onClick={addBtn}><img src={cart} alt="cart icon" />Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
