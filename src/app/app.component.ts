import {Component, OnInit} from '@angular/core';
import {Pessoa} from "./model/pessoa";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title: string = 'cadastroCompleto';

    pessoa: Pessoa;

    pessoas: Pessoa []  // array de pessoas que guarda o nome e idade;

    maisVelho = null;
    maisNovo = null;

    ngOnInit() {
        this.pessoa = new Pessoa();
        this.pessoas = [];
    }

    cadastrar(pessoa: Pessoa) { // função de cadastro
        if (pessoa.nome && pessoa.idade) {//Validação que so pode cadastrar com nome e idade.
            this.pessoas.push(pessoa);
            this.pessoa = new Pessoa();//limpa o model para inserir o proximo.
            this.idades(); // chamada da função idades que atualiza a pessoa mais velha ou mais nova que é cadastrada segundo o parâmetro
        }
    }

    excluir(id) { // função de exclusão
        this.pessoas.splice(this.pessoas.indexOf(id), 1); // função splice que apaga o registro da pessoa segundo o index informado e a quantidade
        this.idades(); // chamada da função idades que atualiza a pessoa mais velha ou mais nova que é cadastrada segundo o parâmetro
    }

    idades() {  // função de atualização da idade mais nova e mais velha
        var idades = this.pessoas.map(({idade}) => idade); // usando a função map para buscar a idade para colocar nova varíavel para fazer as comparações
        var velho = Math.max(...idades); // usa-se a função max da biblioteca MATH para comparar se a idade é a maior
        var novo = Math.min(...idades); // usa-se a função max da biblioteca MATH para comparar se a idade é a menor
        this.maisVelho = this.pessoas.find(({idade}) => idade == velho); // substitui na varíavel maisVelho se aquela idade segundo a função atribuida a variável velho for verdade
        this.maisNovo = this.pessoas.find(({idade}) => idade == novo); // substitui na varíavel maisNovo se aquela idade segundo a função atribuida a variável novo for verdade
    }
}
