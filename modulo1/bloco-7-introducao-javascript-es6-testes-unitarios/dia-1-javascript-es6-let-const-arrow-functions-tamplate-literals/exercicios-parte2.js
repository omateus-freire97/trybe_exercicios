// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (num) => {
  let total = 1;
  for (let i = 2; i <= num; i += 1) {
    total = total * i;
  }
  return total;
}

console.log(fatorial(5));