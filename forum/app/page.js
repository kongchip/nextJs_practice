'user client';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="main-page">
      <Link href={'/api/list'}>
        <button className="choice-btn">모든 글데이터 가져오기</button>
      </Link>
      <Link href={'/api/data'}>
        <button className="choice-btn">현재시간 확인하기</button>
      </Link>
      <Link href={'/list'}>
        <button className="choice-btn">게시글 보러가기</button>
      </Link>
    </div>
  );
}

function List() {
  <Link href={'/api/list'} />;
}
