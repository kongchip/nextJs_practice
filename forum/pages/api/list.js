import { connectDB } from '@/util/database.js';

export default async function handler(req, res) {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  res.status(200).json(result);
}
