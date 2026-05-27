(function () {
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  // Legge preferenza salvata o default dark
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    html.setAttribute('data-theme', 'light');
    toggle.textContent = '🌙';
  }
  // Click: scambia tema e salva
  toggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'light') {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      toggle.textContent = '☀️';
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggle.textContent = '🌙';
    }
  });
})();