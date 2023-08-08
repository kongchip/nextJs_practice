'use client';
// @refresh reset
import Link from 'next/link';

export default async function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id}`}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={'/edit/' + result[i]._id}> ✏️</Link>
          <span
            onClick={(e) => {
              fetch('/api/post/delete', { method: 'POST', body: result[i]._id })
                .then((r) => r.json())
                .then((r) => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none';
                  }, 1000);
                });
            }}
          >
            🗑️
          </span>
          <p>{result[i].content}</p>
        </div>
      ))}
      <Link href={'/write'}>
        <button className="choice-btn">글작성</button>
      </Link>
    </div>
  );
}
