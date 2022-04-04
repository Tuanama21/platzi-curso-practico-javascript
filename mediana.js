function calcularMediaArimetica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista1.length; i++ ){
    //     sumaLista=sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, newElemento){
            return   valorAcumulado + newElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
 return promedioLista
};


const lista1 = [
    100,
    200,
    500,
    40000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    // necesitamos dos elementos
    // -> el promedio
    // -> la mediana
   const elemento1 = lista1[mitadLista1 - 1];
   const elemento2 = lista1[mitadLista1];
  
   const promedioElemento1y2 = calcularMediaArimetica([elemento1, elemento2]);

   mediana = promedioElemento1y2;

}else {
    //posicion mitadlista1 
    mediana = lista1[mitadLista1];
}