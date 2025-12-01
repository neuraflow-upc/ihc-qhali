document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const socialButtons = document.querySelectorAll('.social-btn');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      console.log('Login con email:', email);
      window.location.href = 'app.html';
    }
  });

  socialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.getAttribute('data-provider');
      console.log('Login con:', provider);
      showSocialLoginModal(provider);
    });
  });
});

function showSocialLoginModal(provider) {
  const providerNames = {
    apple: 'Apple',
    google: 'Google',
    facebook: 'Facebook'
  };

  const modal = document.createElement('div');
  modal.className = 'social-modal';
  modal.innerHTML = `
    <div class="social-modal-content">
      <h4>Conectando con ${providerNames[provider]}</h4>
      <div class="modal-spinner"></div>
      <p>Redirigiendo...</p>
    </div>
  `;

  document.body.appendChild(modal);

  setTimeout(() => {
    window.location.href = 'app.html';
  }, 2000);
}
