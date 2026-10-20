var Tema = (function () {
  var CHAVE = 'portfolio.tema';
  var botao = null;

  function atual(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    if (botao) botao.textContent = tema === 'escuro' ? 'claro' : 'escuro';
  }

  function inicial() {
    var salvo = null;
    try { salvo = localStorage.getItem(CHAVE); } catch (e) { salvo = null; }
    if (salvo === 'claro' || salvo === 'escuro') return atual(salvo);
    var prefere = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    atual(prefere ? 'claro' : 'escuro');
  }

  function iniciar() {
    botao = document.getElementById('tema');
    inicial();
    if (botao) botao.addEventListener('click', function () {
      var novo = document.documentElement.getAttribute('data-theme') === 'escuro' ? 'claro' : 'escuro';
      atual(novo);
      try { localStorage.setItem(CHAVE, novo); } catch (e) { /* modo privado */ }
    });
  }

  return { iniciar: iniciar };
})();

document.addEventListener('DOMContentLoaded', Tema.iniciar);
