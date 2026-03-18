document.addEventListener('DOMContentLoaded', () => {
  // 1. TIL 작성 폼 제어 로직
  const tilForm = document.querySelector('#til-form');
  const tilList = document.querySelector('#til-list');

  if (tilForm && tilList) {
    tilForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const dateValue = document.querySelector('#til-date').value;
      const titleValue = document.querySelector('#til-title').value;
      const contentValue = document.querySelector('#til-content').value;

      const newArticle = document.createElement('article');
      newArticle.classList.add('til-item');

      const timeElem = document.createElement('time');
      timeElem.textContent = dateValue;

      const titleElem = document.createElement('h3');
      titleElem.textContent = titleValue;

      const contentElem = document.createElement('p');
      contentElem.textContent = contentValue;

      newArticle.appendChild(timeElem);
      newArticle.appendChild(titleElem);
      newArticle.appendChild(contentElem);

      tilList.prepend(newArticle);
      tilForm.reset();
    });
  }

  // 2. 갤러리 라이트박스(오버레이) 제어 로직
  const galleryItems = document.querySelectorAll('.gallery-item');
  const imageViewer = document.querySelector('#image-viewer');
  const fullImage = document.querySelector('#full-image');
  const imageCaption = document.querySelector('#image-caption');

  if (galleryItems.length > 0 && imageViewer && fullImage && imageCaption) {
    galleryItems.forEach(item => {
      // 마우스 오버 시 오버레이 표시
      item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('figcaption');

        if (img && caption) {
          fullImage.src = img.src;
          imageCaption.textContent = caption.textContent;
          imageViewer.classList.add('active');
        }
      });

      // 마우스 아웃 시 오버레이 숨김
      item.addEventListener('mouseleave', () => {
        imageViewer.classList.remove('active');
        // 애니메이션 종료 후 src 초기화 (깜빡임 방지)
        setTimeout(() => {
          if (!imageViewer.classList.contains('active')) {
            fullImage.src = "";
          }
        }, 300);
      });
    });
  }
});