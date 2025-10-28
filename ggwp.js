document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const cardWidth = 370;
    const gap = 30;
    let currentPosition = 0;
    const visibleCards = 4;
  
    nextBtn.addEventListener('click', () => {
      const maxPosition = -(cardWidth + gap) * 3;
      currentPosition = Math.max(currentPosition - (cardWidth + gap), maxPosition);
      carousel.style.transform = `translateX(${currentPosition}px)`;
    });
  
    prevBtn.addEventListener('click', () => {
      currentPosition = Math.min(currentPosition + (cardWidth + gap), 0);
      carousel.style.transform = `translateX(${currentPosition}px)`;
    });
  });      