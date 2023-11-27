// ==================== ENTENDENDO ARRAYS ====================
    // Printando todo o conteúdo do array:
const nomes = ['Maria', 'João', 'José'];
console.log(nomes);

    // Acessando dinamicamente (selecionar particularmente) cada valor do array:
console.log(nomes[0]) // ou [1], ou ainda [2]. A contagem de indices começa em 0 assim como no Python.

    // Adicionando valores ao array. Existem pelo menos duas maneiras de fazer isso. Primeiro o método "push" e depois com a inserção direta mediante acréscimo de um índice mais o valor que irá preencher o índice.
    // Metódo PUSH:
nomes.push('Sérgio');
    // Índice + valor:
nomes[4] = 'Joana';
console.log(nomes);
    //Também é possivel subtituir valores em índices já preenchidos.
    // Método POP remove último valor do array, assim como no Python. Porém, este método, dentro do console.log, também serve para cuspir no terminal o último valor do array.
nomes.pop()
console.log(nomes)
console.log(nomes.pop())
    //Método SHIFT ele retira/printa último valor do array:
nomes.shift();
console.log(nomes);
console.log(nomes.shift());
    // Método LENTH me mostra o tamanho da lista:
console.log('Tamanho do array: ' + nomes.length);

// ==================== ENTENDENDO ESTRUTURAS DE REPETIÇÃO ====================

    // Estrutura de repetição FOR:
 for (let contador = 0; contador < 10; contador++) {
        console.log(contador);
 }
    // Testando numa string:
console.log('');
const nomeCompleto = 'Sergio dos Santoa Lima'
for (let indice = 0; indice < nomeCompleto.length; indice++){
    console.log(nomeCompleto[indice]);
}

    // Como depurar o código?