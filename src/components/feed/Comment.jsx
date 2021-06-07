import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { elements } = this.props;

    return (
      <>
        <div className="commentBox">
          <img className="commentImg" src="/images/profile.jpg" alt="profile" />
          <div className="text">{elements}</div>
        </div>
      </>
    );
  }
}

export default Comment;
