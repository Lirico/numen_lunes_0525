// En el 2015 en version ES6 -> class

class Persona {
  constructor(brazos, piernas, frase) {
    this.brazos = brazos;
    this.piernas = piernas;
    this.frase = frase;
  }

  decirFrase() {
    return this.frase;
  }
}
// const franco = new Persona(2, 2, "JAJAJ");
// const messi = new Persona(2, 3, "Anda palla bobo");
class Empleado extends Persona {
  constructor(brazos, piernas, frase, salario, aguinaldo) {
    super(brazos, piernas, frase);
    this.salario = salario;
    this.aguinaldo = aguinaldo;
  }

  decirFrase() {
    return this.frase;
  }
}

const jero = new Empleado("2", "1", "Pasame la muleta", 500000, 250000)

console.log(jero.decirFrase())