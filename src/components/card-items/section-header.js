import React from "react"

import "./section-header.css"

const SectionHeader = props => {
  return (
    <h2
      className={
        `section-heading-container${props.light ? "-light" : ""} 
        ${props.full ? "section-full" : ""}`
      }
    >
      <span
        className={`on-section-heading${props.light ? "-light" : ""}`}
      >
        {props.title}
      </span>
    </h2>
  )
}

export default SectionHeader
