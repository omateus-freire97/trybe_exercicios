// 1 - Crie uma função que receba um número e retorne seu fatorial.

// const fatorial = (num) => {
//   let total = 1;
//   for (let i = 2; i <= num; i += 1) {
//     total = total * i;
//   }
//   return total;
// }

// console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const recebeFrase = (frase) => {
  let palavraFrase = frase.split(' ');
  let maiorPalavra = 0;
  let total = '';

  for (let palavra of palavraFrase){
    if (palavra.length > maiorPalavra) {
      maiorPalavra = palavra.length;
      total = palavra;
    }
  }
  return total;
}

console.log(recebeFrase('Antonio foi no banheiro e não sabemos o que aconteceu'));