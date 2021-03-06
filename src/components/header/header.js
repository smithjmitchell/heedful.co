import React from "react"

import "./header.css"

const headerTopics = [
  "Market",
  "Covid",
  "Trending",
  "Podcasts",
  "Tickers",
  "Technology",
  "Political",
  "IPO",
]

const headerItems = headerTopics.map(topic => (
  <a href={`/#${topic}`} className="navbar-item">
    <span>{topic}</span>
  </a>
))

const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
          onClick={() => {
            let toggle = document.querySelector(".navbar-burger")
            let menu = document.querySelector(".navbar-menu")
            toggle.classList.toggle("is-active")
            menu.classList.toggle("is-active")
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="mainNavbar"
        className="navbar-menu"
        onClick={() => {
          let toggle = document.querySelector(".navbar-burger")
          let menu = document.querySelector(".navbar-menu")
          toggle.classList.toggle("is-active")
          menu.classList.toggle("is-active")
        }}
      >
        <div className="navbar">{headerItems}</div>
      </div>
    </nav>
  </header>
)

export default Header
