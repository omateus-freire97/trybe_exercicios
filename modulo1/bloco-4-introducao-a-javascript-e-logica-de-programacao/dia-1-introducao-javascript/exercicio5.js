const a = 50;
const b = 80;
const c = 50;

let total = a + b + c;

if(a < 0 && b < 0 && c < 0){
    console.log('Erro, valor inválido');
} else if(total === 180){
     console.log(true);
} else{
    console.log(false);
}


