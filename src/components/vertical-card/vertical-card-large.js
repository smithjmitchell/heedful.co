import React from "react"

import Hanging from "../card-items/hanging-comment"
import Image from "../card-items/image"

const VerticalCardLarge = props => {
  const { node } = props
  const image = node.localImage.childImageSharp.fluid

  return (
    <div class="column vertical-head">
      <div class="card">
        <Image image={image} link={node.news_url} />
        <div class="card-content">
          <a
            className="on-article-source"
            href={node.news_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {node.source_name}
          </a>
          <a
            className="on-article-title"
            href={node.news_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {node.title}
          </a>
          <a
            className="on-article-text"
            href={node.news_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {node.text}
          </a>
        </div>
        <Hanging id={node.id} backgroundColor={"#6c252d"} />
      </div>
    </div>
  )
}

export default VerticalCardLarge
