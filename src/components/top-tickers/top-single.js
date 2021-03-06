import React from "react"

import Comment from "../card-items/comment"
import "./top-single.css"

const TopSingle = props => {
  const { node } = props

  return (
    <li className="top-single">
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
    </li>
  )
}

export default TopSingle
