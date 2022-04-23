// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// exercicio 1 - feito
// const testingScope = (escopo) => {
//   if(escopo === true){
//   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   ifScope = `${ifScope} ótimo, fui atualizada no escopo !`;
//   console.log(ifScope); 
// } else {
//   let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//   console.log(elseScope);
//   }
// }

// testingScope(true);

// exercicio 2 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaNumeros = () => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13

  return oddsAndEvens;
}

const resultado = ordenaNumeros();
console.log(`Os números ${resultado} se encontram ordenados de forma crescente!`);
