export default function Write() {
  return (
    <div>
      <h4>글작성 페이지</h4>
      <form action="/api/test" method="POST">
        <input name="title" type="text" placeholder="글제목" />
        <input name="content" type="text" placeholder="글 내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
