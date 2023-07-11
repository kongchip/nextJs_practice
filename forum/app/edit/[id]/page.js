import Link from 'next/link';
import { connectDB } from '@/util/database.js';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4 className="write-page">수정페이지</h4>
      <form action="/api/post/edit" method="POST" className="write-container">
        <div>글 제목</div>
        <input className="write-title" name="title" type="text" defaultValue={result.title} />
        <div>글 내용</div>
        <input className="write-content" name="content" type="text" defaultValue={result.content} />
        <input style={{ display: 'none' }} name="_id" defaultValue={result._id.toString()} />
        <button className="postBtn" type="submit">
          글수정
        </button>
        <Link href="/list">
          <button className="backBtn">뒤로 가기</button>
        </Link>
      </form>
    </div>
  );
}
