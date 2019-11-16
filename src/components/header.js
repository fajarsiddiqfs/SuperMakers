import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
    }}
  >
    <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          className="header"
        >
          {siteTitle}
        </Link>
        
      </h2>
      <a href="https://www.fajarsiddiq.com/">
        <svg className="cart-svg" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32C9.8 32 8 33.8 8 36C8 38.2 9.8 40 12 40C14.2 40 16 38.2 16 36C16 33.8 14.2 32 12 32ZM0 0V4H4L11.2 19.2L8.4 24C8.2 24.6 8 25.4 8 26C8 28.2 9.8 30 12 30H36V26H12.8C12.6 26 12.4 25.8 12.4 25.6V25.3999L14.2 21.9999H29C30.6 21.9999 31.8 21.1999 32.4 19.9999L39.6 7C40 6.6 40 6.4 40 6C40 4.8 39.2 4 38 4H8.4L6.6 0H0ZM32 32C29.8 32 28 33.8 28 36C28 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36C36 33.8 34.2 32 32 32Z" fill="white"/>
      </svg>
      </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
