import React from "react"

import Comment from "../card-items/comment"
import Image from "../card-items/image"

const HorizontalCard = props => {
  const { node } = props
  const image = node.localImage.childImageSharp.fluid

  return (
    <>
      <Image image={image} link={node.news_url} />
      <div className="on-article-source mt-3">
        <a href={node.news_url} target="_blank" rel="noreferrer noopener">
          {node.source_name}
        </a>
        <span className="on-comment-right">
          <Comment id={node.id} />
        </span>
      </div>
      <a
        className="on-article-title mt-1"
        href={node.news_url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {node.title}
      </a>
    </>
  )
}

export default HorizontalCard
