// CODIGO DEL CUADRADO

console.group('Cuadrados');
//const ladoCuadrado = 5;
//console.log('los lados del cuadrado mide: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado*4 ;
}
//console.log('el perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

//const areaCuadrado= ladoCuadrado*ladoCuadrado;
function areaCuadrado(lado){
    return lado*lado;
}
console.log('el area del cuadrado es: ' + areaCuadrado + 'cm^2');
console.groupEnd();


// CODIGO DEL TRIANGULO
//console.group('Triangulos');
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log('los lados del triamgulo mide: ' 
//+ ladoTriangulo1 + 'cm, '
//+ ladoTriangulo2 + 'cm, '
//+ baseTriangulo + 'cm'
//);

//const alturaTriangulo=5.5;
//console.log('La altura del trinágulo es: ' + alturaTriangulo + 'cm');

//const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log('el perimetro del triangulo es: ' + perimetroTriangulo + 'cm');

//const areaTriangulo= (baseTriangulo*alturaTriangulo)/2;
function areaTriangulo(base, altura){
    return (base*altura)/2;
}

//console.log('el area del triangulo es: ' + areaTriangulo + 'cm^2');

console.groupEnd();

// CODIGO DEL CIRCULO
//console.group('Circulo');
// Radio
//const radioCirculo = 4;
//console.log('El Radio del ciculo: ' + radioCirculo + 'cm');
//Diametro Circulo

//const diametroCirculo = radioCirculo*2;
function diametroCirculo(radio) { 
    return radio*2;
}     
//console.log('El diametro del ciculo: ' + diametroCirculo + 'cm');
//PI
const PI = Math.PI;
//console.log('El PI : ' + PI + 'cm');
//Circunferencia
//const perimetroCirculo = 2*PI*radioCirculo;
function perimetroCirculo (radio) {
   const diametro = diametroCirculo(radio);
   return diametro*PI;
}
//console.log('El perimetro del ciculo: ' + perimetroCirculo + 'cm');
//Area
//const areaCirculo= PI*radioCirculo*radioCirculo; 
function areaCirculo(radio) {
    return PI*radio*radio;
}
//console.log('El area del ciculo: ' + areaCirculo + 'cm^2');

console.groupEnd();

// aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const area= areaCuadrado(value);
    alert(area);

}