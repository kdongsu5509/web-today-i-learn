// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO: 입력값을 가져와서 새 TIL 항목을 만들어 목록에 추가하세요
});

document.addEventListener('DOMContentLoaded', () => {
  // DOM 요소 선택
  const tilForm = document.querySelector('#til-form');
  const tilList = document.querySelector('#til-list');

  // 폼 제출 이벤트 리스너 등록
  tilForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 페이지 새로고침 방지

    // 입력값 가져오기
    const dateValue = document.querySelector('#til-date').value;
    const titleValue = document.querySelector('#til-title').value;
    const contentValue = document.querySelector('#til-content').value;

    // 새로운 TIL 항목(article) 생성
    const newArticle = document.createElement('article');
    newArticle.classList.add('til-item');

    // 내부 태그 생성 및 값 할당
    const timeElem = document.createElement('time');
    timeElem.textContent = dateValue;

    const titleElem = document.createElement('h3');
    titleElem.textContent = titleValue;

    const contentElem = document.createElement('p');
    contentElem.textContent = contentValue;

    // 생성된 태그들을 article에 조립
    newArticle.appendChild(timeElem);
    newArticle.appendChild(titleElem);
    newArticle.appendChild(contentElem);

    // TIL 목록의 최상단에 새 항목 추가
    tilList.prepend(newArticle);

    // 폼 초기화
    tilForm.reset();
  });
});