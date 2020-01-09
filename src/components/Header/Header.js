import React from 'react'
import ThemeContext from "../Providers/ThemeContext";

const Header = () => {
    // console.log('THEME: ', theme)
  return (
      <ThemeContext.Consumer>
          {theme => (<nav className={theme === 'light' ? "navbar sticky-top navbar-expand-lg navbar-dark bg-dark" : "navbar sticky-top navbar-expand-lg navbar-light bg-light"}>
                        <a className="navbar-brand" href="#">
                            Welcome to Gan Shosh!
                        </a>
                        <span className={theme === 'light' ? "badge badge-light" : "badge badge-dark"}>With us - your child gets the most</span>
                    </nav>)}
      </ThemeContext.Consumer>
  )
}

export default Header
