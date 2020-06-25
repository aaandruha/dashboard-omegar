import React from 'react'

const Header = (props) => {
    return (
        <div className="main-page__header">
        <div className="b-nav">
          <div className="b-nav__logo">
            <img src="image/logo.png" />
          </div>
        </div>
        <div className="b-search">
          <div className="b-search__icon"></div>
          <input type="text" className="b-search__input" placeholder="search" />
        </div>
        <div className="b-menu"></div>
        <div className="b-profile">
          <div className="b-profile__photo">
            <img src="image/profile.png" alt="" />
          </div>
        </div>
      </div>  
    )
}

export default Header;