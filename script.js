// Dados dos exercícios e explicações por nível

const niveis = {
  1: {
    nome: "Números Inteiros",
    desbloqueado: true,
    explicacao: `
      <h2>O que são Números Inteiros?</h2>
      <p>Os números inteiros incluem todos os números positivos, negativos e o zero. Eles não têm parte decimal.</p>
      <h3>Como funcionam?</h3>
      <p>Na reta numérica, os números negativos ficam à esquerda do zero e os positivos à direita.</p>
      <h3>Como fazer cálculos com eles?</h3>
      <p>Adição, subtração, multiplicação e divisão seguem regras especiais quando envolvem números negativos.</p>
      <h3>Exemplo:</h3>
      <p>(-3) + 5 = 2</p>
    `,
    exercicios: [
      {
        pergunta: "Quanto é (-3) + 5?",
        respostas: ["2", "3", "-2", "1"],
        correta: 0
      },
      {
        pergunta: "Quanto é 7 - 10?",
        respostas: ["-3", "3", "-17", "17"],
        correta: 0
      },
      {
        pergunta: "Quanto é (-4) x 3?",
        respostas: ["-12", "12", "-7", "7"],
        correta: 0
      },
      {
        pergunta: "Quanto é (-15) ÷ 3?",
        respostas: ["-5", "5", "-45", "45"],
        correta: 0
      },
      {
        pergunta: "Quanto é 8 + (-13)?",
        respostas: ["-5", "5", "21", "-21"],
        correta: 0
      }
    ]
  },
  2: {
    nome: "Equações do 1º Grau",
    desbloqueado: false,
    explicacao: `
      <h2>O que são Equações do 1º Grau?</h2>
      <p>Equações do 1º grau são expressões matemáticas que possuem incógnitas elevadas a potência 1.</p>
      <h3>Como funcionam?</h3>
      <p>O objetivo é encontrar o valor da incógnita que torna a equação verdadeira.</p>
      <h3>Como resolver?</h3>
      <p>Isolando a incógnita com operações inversas de adição, subtração, multiplicação e divisão.</p>
      <h3>Exemplo:</h3>
      <p>2x + 3 = 7 → 2x = 7 - 3 → 2x = 4 → x = 4 ÷ 2 → x = 2</p>
    `,
    exercicios: [
      {
        pergunta: "Resolva: 2x + 3 = 7",
        respostas: ["2", "3", "4", "1"],
        correta: 0
      },
      {
        pergunta: "Resolva: 5x - 10 = 0",
        respostas: ["2", "0", "3", "-2"],
        correta: 0
      },
      {
        pergunta: "Resolva: 3x + 4 = 13",
        respostas: ["3", "4", "5", "6"],
        correta: 0
      },
      {
        pergunta: "Resolva: x - 5 = 10",
        respostas: ["15", "5", "10", "20"],
        correta: 0
      },
      {
        pergunta: "Resolva: 4x = 16",
        respostas: ["4", "8", "2", "16"],
        correta: 0
      }
    ]
  },
  3: {
    nome: "Equações do 2º Grau",
    desbloqueado: false,
    explicacao: `
      <h2>O que são Equações do 2º Grau?</h2>
      <p>São equações que possuem a incógnita elevada ao quadrado (x²).</p>
      <h3>Como funcionam?</h3>
      <p>Buscamos valores que satisfazem a equação, podendo ter até duas soluções reais.</p>
      <h3>Como resolver?</h3>
      <p>Usando fatoração, fórmula de Bhaskara ou completando o quadrado.</p>
      <h3>Exemplo:</h3>
      <p>x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 ou x = 3</p>
    `,
    exercicios: [
      {
        pergunta: "Resolva: x² - 5x + 6 = 0",
        respostas: ["2 ou 3", "1 ou 6", "-2 ou -3", "0"],
        correta: 0
      },
      {
        pergunta: "Resolva: x² = 16",
        respostas: ["4 ou -4", "16", "-4", "0"],
        correta: 0
      },
      {
        pergunta: "Resolva: x² + 3x + 2 = 0",
        respostas: ["-1 ou -2", "1 ou 2", "2 ou 3", "0"],
        correta: 0
      },
      {
        pergunta: "Resolva: x² - 9 = 0",
        respostas: ["3 ou -3", "9", "-3", "0"],
        correta: 0
      },
      {
        pergunta: "Resolva: x² + x - 6 = 0",
        respostas: ["2 ou -3", "-2 ou 3", "3 ou -3", "0"],
        correta: 0
      }
    ]
  }
};


// Variáveis de controle
let nivelAtual = 0;
let perguntaAtual = 0;

const menu = document.getElementById('menu');
const nivelSection = document.getElementById('nivel');
const explicacaoDiv = document.getElementById('explicacao');
const perguntaDiv = document.getElementById('pergunta');
const feedbackDiv = document.getElementById('feedback');
const btnComecar = document.getElementById('btnComecar');
const btnVoltarMenu = document.getElementById('btnVoltarMenu');

const btnNivel1 = document.getElementById('nivel1');
const btnNivel2 = document.getElementById('nivel2');
const btnNivel3 = document.getElementById('nivel3');

// Função para mostrar o menu inicial e atualizar botões
function mostrarMenu() {
  nivelSection.style.display = 'none';
  menu.style.display = 'block';

  // Atualiza estado dos botões conforme desbloqueio
  btnNivel1.disabled = !niveis[1].desbloqueado;
  btnNivel2.disabled = !niveis[2].desbloqueado;
  btnNivel3.disabled = !niveis[3].desbloqueado;
  
  feedbackDiv.textContent = '';
  perguntaDiv.innerHTML = '';
  explicacaoDiv.innerHTML = '';
  btnComecar.style.display = 'none';
  btnVoltarMenu.style.display = 'none';
}

// Função para mostrar explicação do nível e botão "Começar Exercícios"
function mostrarExplicacao(nivel) {
  nivelAtual = nivel;
  perguntaAtual = 0;

  menu.style.display = 'none';
  nivelSection.style.display = 'block';
  feedbackDiv.textContent = '';
  perguntaDiv.innerHTML = '';

  explicacaoDiv.innerHTML = niveis[nivel].explicacao;
  btnComecar.style.display = 'inline-block';
  btnVoltarMenu.style.display = 'none';
  btnComecar.focus();
}

// Função para iniciar os exercícios
function comecarExercicios() {
  btnComecar.style.display = 'none';
  feedbackDiv.textContent = '';
  mostrarPergunta();
}

// Função para mostrar a pergunta atual
function mostrarPergunta() {
  const exercicio = niveis[nivelAtual].exercicios[perguntaAtual];
  explicacaoDiv.innerHTML = '';  // limpa explicação
  perguntaDiv.innerHTML = `<p>${exercicio.pergunta}</p>`;
  feedbackDiv.textContent = '';

  // Criar botões das respostas
  perguntaDiv.querySelectorAll('button').forEach(b => b.remove());
  exercicio.respostas.forEach((resp, i) => {
    const btn = document.createElement('button');
    btn.textContent = resp;
    btn.style.margin = '5px';
    btn.onclick = () => verificarResposta(i);
    perguntaDiv.appendChild(btn);
  });
}

// Função para verificar resposta
function verificarResposta(index) {
  const correta = niveis[nivelAtual].exercicios[perguntaAtual].correta;
  if (index === correta) {
    feedbackDiv.style.color = 'lightgreen';
    feedbackDiv.textContent = 'Correto! 🎉';
    perguntaAtual++;

    if (perguntaAtual >= niveis[nivelAtual].exercicios.length) {
      setTimeout(mostrarConclusao, 1200);
    } else {
      setTimeout(mostrarPergunta, 1200);
    }
  } else {
    feedbackDiv.style.color = 'red';
    feedbackDiv.textContent = 'Errou! Tente novamente.';
  }
}

// Função para mostrar conclusão do nível
function mostrarConclusao() {
  perguntaDiv.innerHTML = '';
  feedbackDiv.style.color = 'deepskyblue';
  feedbackDiv.innerHTML = `Parabéns, você completou o <strong>Nível ${nivelAtual} - ${niveis[nivelAtual].nome}</strong>! <br>⭐⭐⭐ Excelente!`;
  btnVoltarMenu.style.display = 'inline-block';

  // Desbloqueia próximo nível (se houver)
  if (nivelAtual < 3) {
    niveis[nivelAtual + 1].desbloqueado = true;
  }
}

// Eventos dos botões do menu
btnNivel1.onclick = () => mostrarExplicacao(1);
btnNivel2.onclick = () => {
  if (!niveis[2].desbloqueado) {
    alert('Você precisa completar o Nível 1 primeiro!');
  } else {
    mostrarExplicacao(2);
  }
};
btnNivel3.onclick = () => {
  if (!niveis[3].desbloqueado) {
    alert('Você precisa completar o Nível 2 primeiro!');
  } else {
    mostrarExplicacao(3);
  }
};

btnComecar.onclick = comecarExercicios;
btnVoltarMenu.onclick = mostrarMenu;

// Inicializa mostrando o menu
mostrarMenu();
