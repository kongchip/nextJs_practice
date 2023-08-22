'use client';

import { useEffect, useState } from 'react';

export default function Comment(props) {
  let [comment, setComment] = useState('');
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/comment/list?id=' + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);
  return (
    <div className="comment-container">
      <div className="comment">💬 댓글</div>
      {data.length > 0
        ? data.map((a, i) => {
            return (
              <div className="comment-list" key={i}>
                <p className="comment-name">{a.name}</p>
                <p>{a.content}</p>
              </div>
            );
          })
        : '댓글 없음'}
      <input
        placeholder="댓글을 작성해 주세요"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        등록
      </button>
    </div>
  );
}
