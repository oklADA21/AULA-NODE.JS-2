class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
      this._resultado = 0;
    }
  
    get resultado() {
      return this._resultado;
    }
  
    set resultado(valor) {
      this._resultado = valor;
    }
  
    aumentarSalario(meta) {
      if (this._resultado >= meta) {
        const aumento = this.salario * 0.1;
        this.salario += aumento;
        return `Salário de ${this.nome} aumentado para ${this.salario}`;
      } else {
        return `${this.nome} atingiu a meta`;
      }
    }
  }

  const joao = new Funcionario('João', 5000);
  console.log(joao.aumentarSalario(100)); 
  joao.resultado = 150;
  console.log(joao.aumentarSalario(100));