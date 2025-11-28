document.addEventListener('DOMContentLoaded', () => {
  initGoAppModal();
  initScrollSpy();
});

function initGoAppModal() {
  const targets = document.querySelectorAll('.go_app');
  targets.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showGoAppNotice();
    });
  });
}

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

function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.header_link');
  const logos = document.querySelectorAll('.a_logo');
  let isManualNavigation = false;
  let scrollTimeout;

  // Handle logo clicks
  logos.forEach(logo => {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, null, window.location.pathname);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, null, window.location.pathname);
      }

      isManualNavigation = true;
      
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isManualNavigation = false;
        window.dispatchEvent(new Event('scroll'));
      }, 1000);
    });
  });

  function updateActiveLink() {
    if (isManualNavigation) return;

    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      
      if (sectionId && window.scrollY >= (sectionTop - 150)) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      
      if (current === 'inicio' && href === '') {
        link.classList.add('active');
      } else if (href === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
}