// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="first-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="website-logo"
      />
    </div>
    <div className="second-container">
      <ul className="second-container">
        <Link to="/">
          <li className="li-items">Home</li>
        </Link>
        <li className="li-items">Products</li>
        <li className="li-items">Cart</li>
      </ul>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
