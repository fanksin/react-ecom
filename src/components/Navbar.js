import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const NavStyles = styled.nav`
  background: #000 !important;
`
const ShoppingCartIconStyles = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavbarRightSideStyles = styled.ul`
  float: right !important;
  align-items: center;
  justify-content: center;
  display: flex;
`
const Navbar = () => {
  return (
    <NavStyles className="nav-wrapper">
      <div className="container">
        <Link to="/">Serhat's Shop</Link>
        <NavbarRightSideStyles>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCartIconStyles className="material-icons">
                shopping_cart
              </ShoppingCartIconStyles>
            </Link>
          </li>
        </NavbarRightSideStyles>
      </div>
    </NavStyles>
  )
}
export default Navbar
