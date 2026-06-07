var mensagensMagro = [
    "NOME, você some de lado! IMC de VALOR é coisa de fantasma.",
    "NOME, seu IMC é VALOR. Sua sombra é mais grossa que você.",
    "NOME com IMC VALOR parece personagem de desenho animado magricela.",
    "IMC VALOR, NOME? Isso é quase invisível!",
    "NOME, IMC VALOR... Você foi ao médico recentemente? Porque isso não é normal não. Sua costela aparece quando você respira fundo. Come uma lasanha, um McDonald's, qualquer coisa com caloria por favor!",
    "IMC VALOR, NOME. Você entra debaixo da porta sem abrir. Na última vez que foi à praia a galerinha achou que era um palito de sorvete andando. Socorro.",
    "NOME com IMC VALOR deve ser a pessoa mais leve do quarteirão. Você pisa na balança e ela agradece. Vai num rodízio e come até o garçom pedir pra parar.",
    "IMC VALOR, NOME? Você some atrás de um poste. Sua roupa serve em você e mais dois amigos ao mesmo tempo. Urgente: descobrir o que é comer de verdade.",
    "NOME, IMC VALOR é preocupante meu amigo. Você consegue passar por uma porta giratória sem ativar. O vento gelado te atravessa. Come uma picanha inteira hoje!",
    "IMC VALOR, NOME. Na academia ninguém acredita que você levanta peso porque parece que você É o peso. Bora engordar um pouquinho pelo menos!",
    "NOME com IMC VALOR parece que tá em modo econômico. Seu metabolismo tá em greve ou você simplesmente esquece de comer? Coloca um alarme pra lembrar das refeições.",
    "IMC VALOR, NOME. Você sentou num banco de praça e o banco ficou em dúvida se tinha alguém. Bora comer uns salgados, uns doces, o que vier!",
    "NOME, IMC VALOR. Você é mais leve que a consciência de quem faz dieta e come escondido. Isso não é bom. Vai comer alguma coisa agora mesmo!",
    "IMC VALOR, NOME? A nutricionista vai chorar quando ver essa ficha. Você é o tipo de pessoa que emagrece tomando água. Bora reverter isso urgente!"
  ]
  
  var mensagensNormal = [
    "NOME, RESPEITO! IMC VALOR, na faixa perfeita!",
    "IMC VALOR, NOME? Você está muito bem.",
    "NOME está voando com IMC VALOR!",
    "Olha NOME aí com IMC VALOR sendo exemplo!",
    "NOME, IMC VALOR. Você é a prova viva que equilíbrio existe. Enquanto os amigos sofrem na dieta ou sofrem na balança, você tá aí no meio feliz da vida.",
    "IMC VALOR, NOME. Perfeito! Pode comer a pizza do fim de semana sem culpa. Você merece, claramente tá fazendo algo certo na vida.",
    "NOME com IMC VALOR é o tipo de pessoa que come o que quer e mantém o peso. Todo mundo te odeia por isso mas com respeito.",
    "IMC VALOR, NOME. O médico olha pra você na consulta e sorri. Isso é raro. Aprecia esse momento porque muito brasileiro não tem esse privilégio.",
    "NOME, IMC VALOR. Você é a média dourada. Nem magro demais nem gordo demais. Tipo o mingau da Cachinhos Dourados, na temperatura certa.",
    "IMC VALOR, NOME. Sua calça serve hoje, vai servir amanhã e provavelmente vai servir daqui 2 anos. Que luxo de estabilidade!",
    "NOME com IMC VALOR claramente não exagera nem na mesa nem na dieta. Esse equilíbrio deveria ser ensinado nas escolas.",
    "IMC VALOR, NOME. Você é o tipo de pessoa que vai à academia sem precisar e come lasanha sem culpa. A vida é boa pra você.",
    "NOME, IMC VALOR. Parabéns! Agora não vai estragar tudo no fim de semana, tá? Um churrasco tudo bem, mas vai com calma no refrigerante.",
    "IMC VALOR, NOME. Está no ponto! Como um bife no ponto certo, nem mal passado nem bem passado. Perfeito assim."

  ]
  
  var mensagensSobrepeso = [
    "NOME... IMC VALOR. Está na hora de cuidar mais da saúde.",
    "IMC VALOR, NOME. Uma caminhada já ajuda bastante.",
    "NOME com IMC VALOR está no meio do caminho.",
    "IMC VALOR, NOME. Seu corpo está dando um aviso.",
    "NOME, IMC VALOR. Você já notou que prefere elevador mesmo pro segundo andar? Não é preguiça não, é o corpo mandando recado. Escuta ele!",
    "IMC VALOR, NOME. A foto do ano passado tá diferente da de hoje né? É sutil mas tá lá. Bora reverter isso antes que fique menos sutil.",
    "NOME com IMC VALOR tá no caminho errado mas ainda dá pra volcar. Para de comer depois das 20h e já é um começo.",
    "IMC VALOR, NOME. Você respira um pouco mais pesado subindo escada? Isso é o seu corpo pedindo socorro em morse. Decodifica a mensagem!",
    "NOME, IMC VALOR. A barriga não cresceu do dia pra noite, cresceu um pouquinho por dia. E vai sumir do mesmo jeito, um pouquinho por dia. Começa hoje.",
    "IMC VALOR, NOME. Você ainda consegue ver os pés olhando pra baixo? Se a resposta demorou pra vir, é hora de agir.",
    "NOME com IMC VALOR precisa de uma conversa honesta com o iFood. Tá pedindo delivery quantas vezes por semana? Exato.",
    "IMC VALOR, NOME. Sua calça favorita ainda serve mas tá protestando um pouco. Ouve o protesto da calça, ela tá certa.",
    "NOME, IMC VALOR. Não é gordo mas tampouco é magro. É aquele momento crítico onde você decide pra qual lado vai. Escolhe bem!",
    "IMC VALOR, NOME. Você tá no grupo que fala que vai começar a malhar na segunda-feira faz 3 meses. Hoje é o dia de parar de falar e começar."
  ]
  
  var mensagensObeso = [
    "NOME, IMC VALOR. É importante procurar orientação médica.",
    "IMC VALOR, NOME. Exercícios e alimentação saudável podem ajudar.",
    "NOME com IMC VALOR. Pequenas mudanças fazem diferença.",
    "IMC VALOR, NOME. Cuide da sua saúde com atenção.",
    "NOME, IMC VALOR. Você sobe na balança e ela manda uma mensagem: um de cada vez por favor. Isso é sério, vai ao médico essa semana.",
    "IMC VALOR, NOME. Sua poltrona favorita tem o seu formato exato. Isso não é conforto, isso é um alerta. Levanta dessa poltrona agora!",
    "NOME com IMC VALOR precisa de uma mudança real. Não amanhã, não na segunda, hoje. Começa com uma caminhada de 15 minutos. Só isso.",
    "IMC VALOR, NOME. Você foi à praia e a maré subiu quando você entrou na água. Com carinho e preocupação: nutricionista, médico, exercício. Os três.",
    "NOME, IMC VALOR. Seu coração tá trabalhando dobrado todo dia. Ele não reclamou ainda mas tá chegando lá. Cuida dele antes que ele te mande uma conta.",
    "IMC VALOR, NOME. Você dorme e ressona tão forte que os vizinhos pensam que tem obra no prédio. Apneia do sono é real e o IMC tem tudo a ver. Vai ao médico!",
    "NOME com IMC VALOR provavelmente evita espelho de corpo inteiro. Isso acaba hoje. Olha, aceita, e decide mudar. Uma coisa por vez.",
    "IMC VALOR, NOME. O cinto de segurança do carro tá sofrendo em silêncio. Ele não fala mas você sabe. Bora mudar isso juntos!",
    "NOME, IMC VALOR. Você sente que cansa fácil? Que as juntas doem? Que o andar ficou mais pesado? Seu corpo tá gritando. Tá na hora de ouvir.",
    "IMC VALOR, NOME. Cada quilo a menos é menos pressão no joelho, menos esforço pro coração, mais anos de vida. Vale a pena. Você vale a pena."
  ]
  
  function pegarMensagemAleatoria(lista, nome, imc) {
    var numero = Math.floor(Math.random() * lista.length)
    var mensagem = lista[numero]
  
    mensagem = mensagem.replace("NOME", nome)
    mensagem = mensagem.replace("VALOR", imc)
  
    return mensagem
  }
  
  function calcular() {
  
    var nome = document.getElementById("entrada-nome").value
    var peso = parseFloat(document.getElementById("entrada-peso").value)
    var altura = parseFloat(document.getElementById("entrada-altura").value)
  
    if (nome === "") {
      nome = "Amigo"
    }
  
    if (!peso || !altura) {
      alert("Preencha peso e altura!")
      return
    }
  
    var imc = peso / (altura * altura)
    var imcFormatado = imc.toFixed(1)
  
    var caixaResultado = document.getElementById("caixa-resultado")
    var emoji = document.getElementById("emoji")
    var numeroImc = document.getElementById("numero-imc")
    var categoria = document.getElementById("categoria")
    var mensagem = document.getElementById("mensagem")
  
    numeroImc.textContent = imcFormatado
  
    caixaResultado.className = "resultado"
  
    if (imc < 18.5) {
  
      caixaResultado.classList.add("magro")
      emoji.textContent = "💀"
      categoria.textContent = "Magro"
      categoria.style.color = "#00aaff"
  
      mensagem.textContent =
        pegarMensagemAleatoria(mensagensMagro, nome, imcFormatado)
  
    } else if (imc <= 24.9) {
  
      caixaResultado.classList.add("normal")
      emoji.textContent = "👌"
      categoria.textContent = "Peso Normal"
      categoria.style.color = "#00cc44"
  
      mensagem.textContent =
        pegarMensagemAleatoria(mensagensNormal, nome, imcFormatado)
  
    } else if (imc <= 29.9) {
  
      caixaResultado.classList.add("sobrepeso")
      emoji.textContent = "🤏"
      categoria.textContent = "Sobrepeso"
      categoria.style.color = "#ffaa00"
  
      mensagem.textContent =
        pegarMensagemAleatoria(mensagensSobrepeso, nome, imcFormatado)
  
    } else {
  
      caixaResultado.classList.add("obeso")
      emoji.textContent = "🍔"
      categoria.textContent = "Obesidade"
      categoria.style.color = "#ff3c3c"
  
      mensagem.textContent =
        pegarMensagemAleatoria(mensagensObeso, nome, imcFormatado)
    }
  
    caixaResultado.style.display = "block"
  }