'user client';
import { connectDB } from '@/util/database.js';
import Link from 'next/link';

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db('forum');
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="main-page">
      <Link href={'/api/list'}>
        <button className="choice-btn">모든 글데이터 가져오기</button>
      </Link>
      <Link href={'/api/data'}>
        <button className="choice-btn">현재시간 확인하기</button>
      </Link>
      <Link href={'/write'}>
        <button className="choice-btn">게시글 작성하기</button>
      </Link>
    </div>
  );
}

function List() {
  <Link href={'/api/list'} />;
}
