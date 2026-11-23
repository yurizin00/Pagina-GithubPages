// 1. Inicializa Ícones Lucide e Animações AOS
lucide.createIcons();
AOS.init({ duration: 750, once: true, offset: 60 });

// 2. Fundo Interativo de Partículas (tsParticles)
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: { value: 45, density: { enable: true, area: 900 } },
    color: { value: ["#38bdf8", "#818cf8", "#c084fc"] },
    links: {
      enable: true,
      color: "#38bdf8",
      distance: 140,
      opacity: 0.22,
      width: 1
    },
    move: { enable: true, speed: 1.2, outModes: "bounce" },
    size: { value: { min: 1.5, max: 3.5 } },
    opacity: { value: 0.5 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.5 } },
      push: { quantity: 3 }
    }
  }
});

// 3. Efeito de Digitação Dinâmica (Typed.js)
new Typed('#typed', {
  strings: [
    'experiências interativas.',
    'aplicações web modernas.',
    'automação e inteligência.',
    'código limpo e escalável.'
  ],
  typeSpeed: 55,
  backSpeed: 30,
  backDelay: 1600,
  loop: true
});

// 4. Barra de Progresso no Topo ao Rolar
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('scroll-progress').style.width = `${progress}%`;
});

// 5. Contador Animado nas Estatísticas
const counters = document.querySelectorAll('.stat-number');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute('data-target');
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = current;
        }
      }, 30);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// 6. Filtro Interativo de Projetos
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || filter === category) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

// 7. Confetes Interativos (Botão "Dar um Oi!" e Formulário)
document.getElementById('celebrate-btn').addEventListener('click', () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('sender-name').value;
  const feedback = document.getElementById('form-feedback');

  confetti({ particleCount: 100, spread: 80, origin: { y: 0.7 } });
  feedback.textContent = `Valeu, ${name}! Mensagem recebida com sucesso.`;
  e.target.reset();
});

// 8. Alternar Tema Claro / Escuro
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeBtn.innerHTML = `<i data-lucide="${isLight ? 'moon' : 'sun'}"></i>`;
  lucide.createIcons();
});

// 9. Ano Atual no Rodapé
document.getElementById('year').textContent = new Date().getFullYear();
