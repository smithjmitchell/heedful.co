import React from "react"

import Hanging from "../card-items/hanging-comment"
import Icon from "../../assets/media-podcast.svg"
import "./podcast-single.css"

const PodcastSingle = props => {
  const { node } = props

  return (
    <div className="column">
      <div className="card podcast-card">
        <div className="card-content">
          <div className="podcast-icon-container">
            <Icon />
          </div>
          <div className="on-article-source on-podcast-source">
            <a href={node.news_url} target="_blank" rel="noreferrer noopener">
              {node.source_name}
            </a>
          </div>
          <a
            className="on-article-title on-podcast-title"
            href={node.news_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {node.title}
          </a>
          <a
            className="on-article-text on-podcast-text"
            href={node.news_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {node.text}
          </a>
        </div>
        <Hanging id={node.id} backgroundColor={"#344955"} />
      </div>
    </div>
  )
}

export default PodcastSingle
