const blob = document.querySelector('.blob');
const title = document.querySelector('.title');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

document.body.addEventListener('mousemove', e => {
  const { clientX, clientY }= e;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 4000, fill: 'forwards' });
});

title.addEventListener('mousemove', e => {
  let iterations = 0;
  const originalWord = e.target.dataset.value;

  const intervalID = setInterval(() => {
    e.target.textContent = e.target.textContent
      .split('')
      .map((letter, index) => {
        if (index < iterations) return originalWord[index];
        return letters[Math.floor(Math.random() * 26)];
      }
      )
      .join('');

      if (iterations >= originalWord.length) clearInterval(intervalID);

      iterations += 1 / 3;
  }, 40);

});
