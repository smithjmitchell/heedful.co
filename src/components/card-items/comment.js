import React from "react"
import { Link } from "gatsby"

import Icon from "../../assets/comment.svg"
import "./comment.css"

const Comment = props => {

  return (
    <span className="comment-icon">
      <Link to={`/discussion/` + props.id} aria-label="discussion page">
        <Icon />
      </Link>
    </span>
  )
}

export default Comment
