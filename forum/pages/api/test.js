import { connectDB } from '@/util/database.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(req.body);
    return res.redirect(302, `/list`);
  }
}
