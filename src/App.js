import React, { useState } from 'react';

function CommentComponent() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="CommentComponent">
      <h2>202312706 이윤호</h2>
      <h2>댓글 컴포넌트</h2>
      <div>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={addComment}>댓글 추가</button>
      </div>
      <div>
        <h3>댓글 목록</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentComponent;
