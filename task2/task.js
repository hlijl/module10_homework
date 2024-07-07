const button = document.querySelector('button');

button.addEventListener('click', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  alert(`Размер экрана: ${width} x ${height}`);
});
