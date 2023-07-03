import { connectDB } from '@/util/database.js';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/id${result[i]._id}`}>
            <h4>{result[i].title}</h4>
          </Link>
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
