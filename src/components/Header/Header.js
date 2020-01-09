import React from 'react'

const Header = ({theme}) => {
    console.log('THEME: ', theme)
  return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Welcome to Gan Shosh!
          </a>
          <span className={theme === 'light' ? "badge badge-light" : "badge badge-dark"}>With us - your child gets the most</span>
    </nav>
  )
}

export default Header
