class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  area() {
    return this.calcularArea();
  }
  
}

let retangulo_01 = new Retangulo(40, 20);
console.log(retangulo_01.calcularArea())
console.log(retangulo_01.area())

let retangulo_02 = new Retangulo(40, 40);
console.log(retangulo_02.calcularArea())
console.log(retangulo_02.area())