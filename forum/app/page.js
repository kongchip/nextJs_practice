import { connectDB } from '@/util/database.js';

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db('forum');
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div>
      <div></div>
    </div>
  );
}
