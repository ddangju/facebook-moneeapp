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

export default class Feedelements extends Component {
  state = { comment: [], commentList: [] };

  addComment = (e) => {
    this.setState({ comment: { text: e.target.value } });
  };

  addClick = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.comment),
    });
  };

  render() {
    const { elements, FeedImg } = this.props;
    console.log(this.state.commentList.length, "gd");
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
        <div className="feedContents">
          <div className="addFeed">{elements}</div>
          <article className="timeLinefeedImg">
            <img className="feedImg" src={FeedImg} />
          </article>
        </div>
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
          {this.state.commentList.map((item, idx) => {
            return <Comment key={idx} elements={item.text} />;
          })}
          <div className="ctnContainer">
            <p>댓글</p>
            <p className="commentCnt">{this.state.commentList.length}</p>
            <p>개</p>
          </div>

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
              onChange={(e) => this.addComment(e)}
            />
            <button className="addBtn" onClick={(e) => this.addClick(e)}>
              댓글 달기
            </button>
          </div>
        </article>
      </div>
    );
  }
}
