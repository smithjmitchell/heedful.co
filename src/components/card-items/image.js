import React from "react"
import Img from "gatsby-image"

const Image = props => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer noopener">
      <Img
        fluid={props.image}
        loading={props.loading || "lazy"}
        fadeIn={false}
      />
    </a>
  )
}

export default Image
