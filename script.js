window.addEventListener('wheel', function(e) {
    window.scrollBy(0, e.deltaY);
  });

  // Adiciona um ouvinte de evento para lidar com as setas do teclado
  window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
      window.scrollBy(0, -50);
    } else if (e.key === 'ArrowDown') {
      window.scrollBy(0, 50);
    }
  });