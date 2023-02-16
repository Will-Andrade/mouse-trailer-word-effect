const blob = document.querySelector('.blob');

document.body.addEventListener('pointermove', e => {
  const { clientX, clientY }= e;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 4000, fill: 'forwards' });
})
