class pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(frase){
        console.log(this.nome + " disse: " + frase);
    }
}

let p1 = new pessoa("Denilson");

p1.falar("Oi, tudo bem?");