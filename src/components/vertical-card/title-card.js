import React from "react"

import Comment from "../card-items/comment"
import Image from "../card-items/image"
import "./title-card.css"

const TitleCard = props => {
  const { node } = props

  const sources = [
    node.mobileImage.childImageSharp.fluid,
    {
      ...node.desktopImage.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <div className="title-card-container">
      <div className="columns">
        <div className="column is-6">
          <div className="title-card-background">
            <div className="title-image">
              <Image
                image={sources}
                link={node.news_url}
                loading={props.loading}
              />
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="on-main-title">
            <a href={node.news_url} target="_blank" rel="noreferrer noopener">
              {node.title}
            </a>
          </div>
          <div className="title-min">
            <div className="on-main-text">
              <a href={node.news_url} target="_blank" rel="noreferrer noopener">
                {node.text}
              </a>
            </div>
            <div className="title-source on-main-source">
              <a href={node.news_url} target="_blank" rel="noreferrer noopener">
                {node.source_name}
              </a>
              <span className="on-comment-right">
                <Comment id={node.id} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleCard
