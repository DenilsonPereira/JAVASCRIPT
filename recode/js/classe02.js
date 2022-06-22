class pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(frase){
        console.log(this.nome + " disse: " + frase);
    }
}

class aluno extends pessoa{
    estudar(disciplina){
        console.log(this.nome + " estuda: " + disciplina)
    }
}

class professor extends pessoa{
    ensinar(disciplina){
        console.log(this.nome + " ensina: " + disciplina)
    }
}

let p1 = new aluno("Denilson");
let p2 = new professor("Pedro");

p1.falar("Oi, tudo bem?");
p1.estudar("Matemática");
p2.ensinar("Inglês");