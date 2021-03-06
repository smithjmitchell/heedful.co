import React from "react"

import Comment from "../card-items/comment"
import Image from "../card-items/image"

import "./market-single.css"

const MarketSingle = props => {
  const { node } = props
  const image = node.localImage.childImageSharp.fluid

  return (
    <div className="market-single-container">
      <div className="columns is-variable is-2">
        <div className="column is-4">
          <div className="article-image-left">
            <Image image={image} link={node.news_url} loading={props.loading} />
          </div>
        </div>
        <div className="column is-8">
          <div className="on-article-source">
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
    </div>
  )
}

export default MarketSingle
