import React from "react"

import Comment from "../card-items/comment"
import Image from "../card-items/image"
import "./vertical-card.css"

const VerticalCard = props => {
  const { node } = props
  const image = node.localImage.childImageSharp.fluid

  return (
    <div className="column">
      <div className="vertical-container">
        <div className="article-image-top">
          <Image image={image} link={node.news_url} />
        </div>
        <div className="on-article-source">
          <a href={node.news_url} target="_blank" rel="noreferrer noopener">
            {node.source_name}
          </a>
          <span className="on-comment-right">
            <Comment id={node.id} />
          </span>
        </div>
        <a
          className="on-article-title on-vertical-title mt-1"
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
    </div>
  )
}

export default VerticalCard
