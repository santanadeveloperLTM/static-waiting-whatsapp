// Função que será chamada quando a DOM estiver carregada
function getTimeout() {
  // Gera um tempo aleatório entre 3 e 8 segundos (em milissegundos)
  const timeout = Math.floor(Math.random() * (8000 - 3000 + 1) + 3000);

  // Obtém o elemento com o ID "waitingTime"
  const waitingTimeElement = document.getElementById("waitingTime");

  // Inicia a contagem regressiva do tempo aleatório
  countdown(timeout / 1000, waitingTimeElement);
}

// Função para a contagem regressiva
function countdown(time, element) {
  let remainingTime = Math.floor(time); // Arredonda para baixo para remover casas decimais

  // Exibe o tempo inicial
  element.textContent = remainingTime;

  // Inicia a contagem regressiva a cada segundo
  const interval = setInterval(function () {
    remainingTime--;

    // Exibe o tempo restante
    element.textContent = remainingTime;

    // Verifica se o tempo chegou a 0
    if (remainingTime <= 0) {
      // Para a contagem regressiva e redireciona para o URL
      clearInterval(interval);
      redirectToURL();
    }
  }, 1000);
}

// Função para redirecionar para o URL
function redirectToURL() {
  // Obtém os parâmetros da query string, se houver
  const params = window.location.search;

  // Redireciona para o URL fornecido com os parâmetros da query string
  window.location.href = "https://wa-router.wavy.global" + params;
}

// Adiciona um ouvinte de eventos para o evento 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", getTimeout);
