document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.go_app');
  targets.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showGoAppNotice();
    });
  });

  function showGoAppNotice() {
    if (document.getElementById('goAppNotice')) return;
    const overlay = document.createElement('div');
    overlay.id = 'goAppNotice';
    overlay.innerHTML = `
      <div class="goapp_modal">
        <h4>Redirección</h4>
        <p>Este botón redirigirá a la aplicación. Cargando...</p>
        <div class="loading_spinner"></div>
        <button type="button" class="close_modal">Cerrar</button>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.close_modal').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.remove();
    });
  }
});