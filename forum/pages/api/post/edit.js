import { ObjectId } from 'mongodb';
import { connectDB } from '@/util/database.js';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    let 바꿀거 = { title: req.body.title, content: req.body.content };
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').updateOne({ _id: new ObjectId(req.body._id) }, { $set: 바꿀거 });

    res.redirect(302, '/list');
  }
}
