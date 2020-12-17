import React from 'react';

/* facker image or 'https://source.unsplash.com/random' */
const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="data">{props.date}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;