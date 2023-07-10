'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Write() {
  let router = useRouter();
  return (
    <div>
      <h4 className="write-page">글 작성하기</h4>
      <form action="/api/post" method="POST" className="write-container">
        <div>글 제목</div>
        <input className="write-title" name="title" type="text" placeholder="제목을 작성해 주세요" />
        <div>글 내용</div>
        <input className="write-content" name="content" type="text" placeholder="" />
        <button className="postBtn" type="submit">
          글작성
        </button>
        <Link href="/list">
          <button className="backBtn">뒤로 가기</button>
        </Link>
      </form>
    </div>
  );
}
