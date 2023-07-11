import { connectDB } from '@/util/database.js';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id}`}>
            <h4>{a.title}</h4>
          </Link>
          <Link href={'/edit/' + result[i]._id}> ✏️</Link>
          <p>{result[i].content}</p>
        </div>
      ))}
      <Link href={'/write'}>
        <button className="choice-btn">글작성</button>
      </Link>
    </div>
  );
}