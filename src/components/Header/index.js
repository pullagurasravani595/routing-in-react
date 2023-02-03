// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="head-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p>wave</p>
    </div>
    <div className="list-container">
      <li className="list-item">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </div>
  </nav>
)

export default Header
