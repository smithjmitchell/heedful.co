import React from "react"

import Comment from "../card-items/comment"
import "./hanging-comment.css"

const Hanging = props => {
  const colorStyle = {
    backgroundColor: `${props.backgroundColor}`,
  }

  return (
    <div className="hanging-comment-icon" style={colorStyle}>
      <Comment id={props.id} />
    </div>
  )
}

export default Hanging
