import { connectDB } from '@/util/database.js';
import { ObjectId } from 'mongodb';
import Comment from '../Comment';
export default async function Detail(props) {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4 className="detail-page">상세페이지</h4>
      <div className="detail-container">
        <h2 className="detail-title">{result.title}</h2>
        <p>{result.content}</p>
        <Comment _id={result._id.toString()} />
      </div>
    </div>
  );
}
