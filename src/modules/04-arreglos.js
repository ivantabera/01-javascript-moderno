const arreglo = [1, 2, 3, 4, 5];

let arreglo2 = [...arreglo, 6];

let arreglo3 = arreglo2.map((numero) => {
    return numero * 2;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);