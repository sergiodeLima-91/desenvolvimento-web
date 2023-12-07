let condicaoDeParada = true
while(condicaoDeParada === true) {    
  const nomePersonagem = 'João';
  const acaoEscolhida = 'Fugir';
    if (acaoEscolhida === "Atacar" || acaoEscolhida === 'Fugir') {
      console.log(nomePersonagem + " escolheu " + acaoEscolhida + "!")
      condicaoDeParada = false;
    } else{
        console.log('Tente novamente')
    };
};

