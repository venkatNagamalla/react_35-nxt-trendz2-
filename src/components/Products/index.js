// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = () => (
  <div className="products-page-container">
    <Header />
    <div className="products-container">
      <img
        className="item-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
    </div>
  </div>
)

export default Products
