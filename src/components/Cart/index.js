// Write your JS code here
import Header from '../Header'
import './index.css'

const Cart = () => {
  console.log('L')
  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-container">
        <img
          className="item-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </div>
  )
}

export default Cart
