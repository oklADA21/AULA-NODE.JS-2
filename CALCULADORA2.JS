class Calculadora {
    adicionar(num1, num2) {
      return num1 + num2;
    }
  
    subtrair(num1, num2) {
      return num1 - num2;
    }
  
    multiplicar(num1, num2) {
      return num1 * num2;
    }
  
    dividir(num1, num2) {
      if (num2 === 0) {
        return "Erro: divisão por zero!";
      }
      return num1 / num2;
    }
  }
  const calculadora = new Calculadora();
  console.log(calculadora.adicionar(5, 3));
  console.log(calculadora.subtrair(10, 4)); 
  console.log(calculadora.multiplicar(2, 5)); 
  console.log(calculadora.dividir(20, 4)); 
  console.log(calculadora.dividir(10, 7));