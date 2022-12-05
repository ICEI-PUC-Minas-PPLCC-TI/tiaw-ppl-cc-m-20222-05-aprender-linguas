(function() {
  var perguntas = [{
    pergunta: "Complete: I have a girlfriend. ___ is really beautiful.",
    alternativas: ["I", "He", "She", "It", "We"],
    respostaCerta: 2
  }, {
    pergunta: "Na frase: Today is friday. Robert and Sarah went to the restaurant yesterday, responda: em que dia Robert e Sarah foram ao restaurante?",
    alternativas: ["Tuesday", "Thursday", "Sunday", "Saturday", "Wednesday"],
    respostaCerta: 1
  }, {
    pergunta: "Complete: Hi. My name's Robert. ___ your name?",
    alternativas: ["How", "When", "What's", "Why", "Where"],
    respostaCerta: 2
  }, {
    pergunta: "Qual pronome no plural é usado para referir-se a objetos que estão longe?",
    alternativas: ["This", "That", "These", "Those", "There"],
    respostaCerta: 3
  }, {
    pergunta: "Quando queremos saber a profissão de alguém,qual pergunta devemos fazer?",
    alternativas: ["What do you do?", "What's your name?", "How are you?", "What time is it?", "How old are you?"],
    respostaCerta: 0
  }, {
    pergunta: "A hora certa para 9 horas e 30 minutos é:",
    alternativas: ["It’s twelve o’clock", "It’s aquarter past two", "It’s four o’clock", "It’s half past nine", "It's nine o'clock and thirty minutes"],
    respostaCerta: 3
  }, {
    pergunta: "Qual a preposição correta para a frase: The game will be ____ March.",
    alternativas: ["In", "At", "On", "Be", "For"],
    respostaCerta: 0
  }, {
    pergunta: "Nice to meet you significa o quê em inglês?",
    alternativas: ["Muito Obrigada", "Seja bem vindo", "Como vai você?", "Prazer em conhecê-lo", "Até logo"],
    respostaCerta: 3
  }, {
    pergunta: "Complete a frase com a palavra em inglês mais adequada para a frase: Nós não temos que ir ao shopping: We ____ have to go to the mall.",
    alternativas: ["Are", "Don't", "There", "No", "The"],
    respostaCerta: 1
  }, {
    pergunta: "Qual palavra abaixo não é um verbo?",
    alternativas: ["Looking", "Going", "Walking", "Feeding", "Amazing"],
    respostaCerta: 4
  }];
  
  var contadorPerguntas = 0; //Número da pergunta
  var selections = []; //Array contendo escolhas do usuário
  var quiz = $('#quiz'); //Objeto div do questionário
  
  // Exibir pergunta inicial
  mostraProximo();
  
  // Clique no botão 'próximo'
  $('#proxima').on('click', function (e) {
    e.preventDefault();
    
    // Suspender o clique durante a animação de fade
    if(quiz.is(':animated')) {        
      return false;
    }
    escolhe();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[contadorPerguntas])) {
      alert('Por favor selecione uma resposta!');
    } else {
      contadorPerguntas++;
      mostraProximo();
    }
  });
  
  // Clique no botão 'anterior'
  $('#anterior').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    escolhe();
    contadorPerguntas--;
    mostraProximo();
  });
  
  // Clique no botão 'Repetir'
  $('#repetir').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    contadorPerguntas = 0;
    selections = [];
    mostraProximo();
    $('#repetir').hide();
  });
  
  // Anima botões ao passar o mouse
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Cria e retorna o div que contém as perguntas e as seleções de resposta
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'pergunta'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var pergunta = $('<p>').append(perguntas[index].pergunta);
    qElement.append(pergunta);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Cria uma lista das opções de resposta como entradas de rádio
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < perguntas[index].alternativas.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += perguntas[index].alternativas[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Lê a seleção do usuário e envia o valor para um vetor
  function escolhe() {
    selections[contadorPerguntas] = +$('input[name="answer"]:checked').val();
  }
  
  // Exibe o próximo elemento solicitado
  function mostraProximo() {
    quiz.fadeOut(function() {
      $('#pergunta').remove();
      
      if(contadorPerguntas < perguntas.length){
        var proximaPergunta = createQuestionElement(contadorPerguntas);
        quiz.append(proximaPergunta).fadeIn();
        if (!(isNaN(selections[contadorPerguntas]))) {
          $('input[value='+selections[contadorPerguntas]+']').prop('checked', true);
        }
        
        // Controla a exibição do botão 'anterior'
        if(contadorPerguntas === 1){
          $('#anterior').show();
          $('#repetir').hide();
        } else if(contadorPerguntas === 0){
          
          $('#anterior').hide();
          $('#repetir').hide();
          $('#proxima').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#proxima').hide();
        $('#anterior').hide();
        $('#repetir').show();
      }
    });
  }
  
  // Calcula a pontuação e retorna um elemento de parágrafo a ser exibido
  function displayScore() {
    var score = $('<p>',{id: 'pergunta'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === perguntas[i].respostaCerta) {
        numCorrect++;
      }
    }
    
    if(numCorrect == 0 || numCorrect == 1){
      score.append("Seu nível de Inglês é muito básico, mas não desanime! Busque textos bem pequenos e com temas bem simples");
    }
    else if(numCorrect == 2 || numCorrect == 3){
      score.append("Seu nível é iniciante, tente aprender mais vocabulários e faça leituras de textos pequenos");
    }
    else if(numCorrect == 4 || numCorrect == 5){
      score.append("Seu nível é bom, você já andou metade do caminho e com treino você irá dominar a outra! Busque por textos de tamanho mediano na hora de treinar, assim você vai longe!");
    }
    else if(numCorrect == 6 || numCorrect == 7){
      score.append("Seu nível é intermediário, você está indo no caminho certo! Busque temas que você não tem familiaridade na hora de práticar para aprender coisas novas e melhorar ainda mais!");
    }
    else if(numCorrect == 8 || numCorrect == 9 || numCorrect == 10){
      score.append("Seu nível é muito avançado! Parabéns! Continue sempre praticando para não perder a prática! Melhore ainda mais com textos grandes e temas que você desconhece!");
    }
    return score;

    
  }
})();