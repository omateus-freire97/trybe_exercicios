//             1  2  3  4                   5   6 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contador = 0;

for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 === 1){
        contador +=1
    }
}

if(contador === 0){
    console.log('nenhum valor ímpar encontrado');
} else{
    console.log(contador);
}

