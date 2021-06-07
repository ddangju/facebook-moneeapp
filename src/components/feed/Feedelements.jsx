import {
  faComment,
  faEllipsisH,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Feed from "../../pages/feed/Feed";
import Comment from "./Comment";

class Feedelements extends Component {
  render() {
    const { elements, FeedImg } = this.props;
    return (
      <div className="timeLine">
        <article className="timeLineHeader">
          <div className="userContainer">
            <img
              className="userheaderImg"
              src="/images/profile.jpg"
              alt="img"
            />
            <div className="userInfo">
              <p className="user">김연주</p>
              <p className="uploadTime">5월25일 오전 7:59분</p>
            </div>
          </div>
          <FontAwesomeIcon className="moreBtn" icon={faEllipsisH} size="lg" />
        </article>
        <div className="text">{elements}</div>
        <article className="timeLinefeedImg">
          <img className="feedImg" src={FeedImg} />
        </article>
        <article className="timeLinefeedIcon">
          <div className="btnContainer">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>좋아요</span>
          </div>
          <div className="btnContainer">
            <FontAwesomeIcon icon={faComment} />
            <span>댓글 달기</span>
          </div>
          <div className="btnContainer">
            <FontAwesomeIcon icon={faShareSquare} />
            <span>공유 하기</span>
          </div>
        </article>
        <article className="commentContainer">
          <Comment />
          <div className="commentContents">
            <img
              className="commentImg"
              src="/images/profile.jpg"
              alt="profile"
            />
            <input
              className="commentInput"
              placeholder="댓글을 입력하세요..."
              type="text"
            />
            <button className="addBtn">댓글 달기</button>
          </div>
        </article>
      </div>
    );
  }
}

export default Feedelements;
