document.addEventListener('DOMContentLoaded', () => {
  initMoodSelector();
  initFavoriteButtons();
  initEmergencyButtons();
  initNavigation();
  initResourcesInteractions();
  initAssistantIA();
  initSupportForms();
  initProfile();
  initLogoHome();
});

function initLogoHome() {
  const logo = document.getElementById('logoHome');
  if (logo) {
    logo.addEventListener('click', () => {
      showOnlySection('inicio');
    });
  }
}

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // Ocultar todas las secciones
          const allSections = document.querySelectorAll('main.container > section');
          allSections.forEach(section => {
            section.style.display = 'none';
          });
          
          // Mostrar solo la sección seleccionada
          targetSection.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  // Scroll spy deshabilitado para evitar conflictos
}

function showOnlySection(sectionId) {
  const allSections = document.querySelectorAll('main.container > section');
  allSections.forEach(section => {
    section.style.display = 'none';
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
  
  // Actualizar navegación
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });
}

function initResourcesInteractions() {
  // Ejercicios recomendados
  const resourceItems = document.querySelectorAll('.resource-item');
  resourceItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('h4').textContent;
      alert(`Reproduciendo: ${title}`);
    });
  });

  // Música
  const musicCards = document.querySelectorAll('.music-card');
  musicCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h4').textContent;
      const artist = card.querySelector('p').textContent;
      alert(`Reproduciendo: ${title} - ${artist}`);
    });
  });

  // Meditación
  const meditationCards = document.querySelectorAll('.meditation-card');
  meditationCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h4').textContent;
      const author = card.querySelector('p').textContent;
      alert(`Reproduciendo: ${title} - ${author}`);
    });
  });

  // Botones de categoría
  const categoryButtons = document.querySelectorAll('.btn-category');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.textContent.trim();
      alert(`Acción: ${action}\n\nEsta funcionalidad se implementará próximamente.`);
    });
  });
}

function initAssistantIA() {
  // Chat items
  const chatItems = document.querySelectorAll('.chat-item');
  chatItems.forEach(item => {
    item.addEventListener('click', () => {
      chatItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      const chatMessages = document.querySelector('.chat-messages');
      if (chatMessages) {
        chatMessages.innerHTML = `
          <div class="message assistant-message">
            <p>Conversación: ${item.textContent}</p>
          </div>
        `;
      }
    });
  });

  // Play button
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const isPlaying = playBtn.textContent === '⏸';
      playBtn.textContent = isPlaying ? '▶' : '⏸';
    });
  }

  // Chat input
  const chatInput = document.querySelector('.chat-input');
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim()) {
        const chatMessages = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `<p>${chatInput.value}</p>`;
        chatMessages.appendChild(messageDiv);
        chatInput.value = '';
        
        setTimeout(() => {
          const assistantDiv = document.createElement('div');
          assistantDiv.className = 'message assistant-message';
          assistantDiv.innerHTML = `<p>Gracias por compartir. Te escucho y estoy aquí para ayudarte.</p>`;
          chatMessages.appendChild(assistantDiv);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
      }
    });
  }

  // Voice button
  const voiceBtn = document.querySelector('.voice-btn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
      alert('Funcionalidad de voz en desarrollo.\nPronto podrás grabar mensajes de audio.');
    });
  }

  // Test button
  const testBtn = document.querySelector('.test-btn');
  if (testBtn) {
    testBtn.addEventListener('click', () => {
      alert('Iniciando test de evaluación psicológica...\n\nEsta funcionalidad se implementará con el sistema de evaluación completo.');
    });
  }

  // New chat button
  const newChatBtn = document.querySelector('.new-chat-btn');
  if (newChatBtn) {
    newChatBtn.addEventListener('click', () => {
      const chatMessages = document.querySelector('.chat-messages');
      if (chatMessages) {
        chatMessages.innerHTML = `
          <div class="message assistant-message">
            <p>¡Hola! Soy tu asistente de IA. ¿Cómo puedo ayudarte hoy?</p>
          </div>
        `;
      }
      
      chatItems.forEach(i => i.classList.remove('active'));
    });
  }
}

function initMoodSelector() {
  const moodButtons = document.querySelectorAll('.mood-btn');
  
  moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      moodButtons.forEach(b => b.style.opacity = '0.5');
      btn.style.opacity = '1';
      
      const mood = btn.getAttribute('data-mood');
      console.log('Mood selected:', mood);
    });
  });
}

function initFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  
  favoriteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
      btn.style.color = btn.textContent === '♥' ? '#c62828' : '#333';
    });
  });
}

function initEmergencyButtons() {
  const emergencyButtons = document.querySelectorAll('.btn-emergency');
  
  emergencyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.textContent.trim();
      alert(`Acción: ${action}\n\nEsta funcionalidad se implementará con el sistema de emergencias real.`);
    });
  });
}

function initSupportForms() {
  // Counseling Form
  const counselingForm = document.getElementById('counselingForm');
  if (counselingForm) {
    counselingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const date = document.getElementById('counseling-date').value;
      const time = document.getElementById('counseling-time').value;
      alert(`✓ Consejería agendada exitosamente\n\nFecha: ${date}\nHora: ${time}\n\nRecibirás una confirmación por correo electrónico.`);
      counselingForm.reset();
    });
  }

  // Community Form
  const communityForm = document.getElementById('communityForm');
  if (communityForm) {
    communityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const experience = document.getElementById('experience').value;
      alert(`✓ Tu experiencia ha sido compartida\n\nGracias por contribuir a nuestra comunidad anónima. Tu historia puede ayudar a otros.`);
      communityForm.reset();
    });
  }

  // Suggestion Form
  const suggestionForm = document.getElementById('suggestionForm');
  if (suggestionForm) {
    suggestionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const topic = document.getElementById('suggestion-topic').value;
      const description = document.getElementById('suggestion-description').value;
      alert(`✓ Sugerencia enviada\n\nTema: ${topic}\n\nGracias por tu retroalimentación. Revisaremos tu sugerencia y trabajaremos en mejorar la aplicación.`);
      suggestionForm.reset();
    });
  }
}

function initProfile() {
  // Toggle profile visibility
  const navRight = document.getElementById('navRight');
  const profileSection = document.getElementById('perfil');
  
  if (navRight && profileSection) {
    navRight.addEventListener('click', () => {
      const isVisible = profileSection.style.display !== 'none';
      
      if (isVisible) {
        // Volver a inicio
        showOnlySection('inicio');
      } else {
        // Mostrar perfil
        showOnlySection('perfil');
      }
    });
  }

  // Export buttons
  const exportButtons = document.querySelectorAll('.export-btn');
  exportButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.mood-summary').querySelector('h3').textContent;
      alert(`📊 Exportando ${section}...\n\nEl reporte será descargado en formato PDF.`);
    });
  });

  // Emergency plan button
  const emergencyPlanBtn = document.querySelector('.emergency-plan-btn');
  if (emergencyPlanBtn) {
    emergencyPlanBtn.addEventListener('click', () => {
      alert('🚨 Plan de Emergencia\n\nEn caso de crisis:\n1. Respirar profundamente\n2. Contactar a un ser querido\n3. Llamar a línea de ayuda\n4. Buscar lugar seguro\n\nLínea de ayuda 24/7: 113');
    });
  }

  // Emergency contact form
  const emergencyContactForm = document.getElementById('emergencyContactForm');
  if (emergencyContactForm) {
    emergencyContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const phone = document.getElementById('contact-phone').value;
      alert(`✓ Contacto de emergencia registrado\n\nNombre: ${name}\nTeléfono: ${phone}\n\nEste contacto será notificado en caso de emergencia.`);
      emergencyContactForm.reset();
    });
  }

  // Mood icons click
  const moodIcons = document.querySelectorAll('.mood-icon');
  moodIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const mood = icon.textContent;
      console.log('Mood clicked:', mood);
    });
  });
}
