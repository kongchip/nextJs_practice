import { connectDB } from '@/util/database.js';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  if (req.method === 'POST') {
    if (req.body.title === '' || req.body.title === '') {
      return res.status(500).json('글 제목 혹은 글 내용이 공백입니다.');
    }
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(req.body);
    return res.redirect(302, `/list`);
  }
}
