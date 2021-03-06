import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Header />
      <main className="site-content">{children}</main>
      <footer className="footer">
        <tbody>
          <tr className="is-centered">
            <td className="on-table-text">
              <a
                href="/about#Disclaimer"
                target="_blank"
                rel="noreferrer noopener"
              >
                Disclaimer
              </a>
            </td>
            <td className="on-table-text">
              <a
                href="/about#Privacy"
                target="_blank"
                rel="noreferrer noopener"
              >
                Privacy
              </a>
            </td>
          </tr>
        </tbody>
        <div>© 2020, Heedful.co</div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
