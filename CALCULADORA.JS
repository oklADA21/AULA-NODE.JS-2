const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite a operação (+, -, *, /): ', (oper) => {
      const resultado = calcular(parseFloat(num1), parseFloat(num2), oper);
      console.log(`O resultado é: ${resultado}`);
      rl.close();
    });
  });
});

function calcular(num1, num2, oper) {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Operação inválida';
  }
}