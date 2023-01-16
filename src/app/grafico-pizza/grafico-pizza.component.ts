import { Valor } from './../model/Valor';
import { Nome } from './../model/Nome';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.css']
})
export class GraficoPizzaComponent implements OnInit {

  @Input() valorInput = 360;
  @Input() rangeInput = 0;
  @Input() arrayNomeInput: Nome[]; // NAO ESQUECER DE ASSOCIAR O OBJ

  // GERENCIA COLUNA VALORES
  public valores: number = this.valorInput;
  public totalRange: number = this.rangeInput;
  public memoria: number = this.valores;
  public arrayValor: Valor[];
  public valor: Valor = new Valor();

  // GERENCIA LINHA NOMES
  public arrayNomes: Nome[];
  public nome1: Nome = new Nome();
  public nome2: Nome = new Nome();
  public nome3: Nome = new Nome();
  public nome4: Nome = new Nome();
  public nome5: Nome = new Nome();

  public pedacoesPizza: string = "";
  public memoriaValor: number = 0;
  public totalDados: number = 0;
  public memoriaCor: string = "";

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);

    this.gerenciaNomes();

    /* CHAMA O ARRAY GERADO PARA QUE POSSA SER RENDERIZADO NA TELA COM OS DADOS ATUAIS */
    setTimeout(() => {

      this.arrayNomes.map((item, index) => {

        if(index == 0) {
          this.renderizaComprimentoColuna(item.valor, 'deg, ');

        }else if(index < (this.arrayNomes.length - 1)) {
          this.renderizaComprimentoColuna(item.valor, 'deg, ');

        }else {
          this.renderizaComprimentoColuna(item.valor, 'deg');

        }

        this.memoriaValor = item.valor;
        item.cor = this.memoriaCor;

      });

    }, 700);

  }

  gerenciaNomes() {

    this.arrayNomes = this.arrayNomeInput; // MANTER ESSA LINHA

    /* EXCLUIR ESSAS LINHAS APOS O TESTE */
    let arryMemoria: Nome[] = [];

    this.nome1.nome = "Palmeiras";
    this.nome1.valor = 10;
    this.nome1.id = this.nome1.nome.replace(" ", "");

    this.nome2.nome = "Cotintians";
    this.nome2.valor = 50;
    this.nome2.id = this.nome2.nome.replace(" ", "");

    this.nome3.nome = "Sao Paulo";
    this.nome3.valor = 30;
    this.nome3.id = this.nome3.nome.replace(" ", "");

    this.nome4.nome = "Santos";
    this.nome4.valor = 100;
    this.nome4.id = this.nome4.nome.replace(" ", "");

    this.nome5.nome = "Cruzeiro";
    this.nome5.valor = 90;
    this.nome5.id = this.nome5.nome.replace(" ", "");

    arryMemoria.push(this.nome1);
    arryMemoria.push(this.nome2);
    arryMemoria.push(this.nome3);
    arryMemoria.push(this.nome4);
    arryMemoria.push(this.nome5);

    /* REORDENA O ARRAY PARA QUE NAO HAJA PROBLEMA DE RENDEIZACAO */
    arryMemoria.sort((a, b) => {

      return a.valor - b.valor;
    });

    this.arrayNomes = arryMemoria;

    this.arrayNomes.map((item) => {
      this.totalDados = this.totalDados + item.valor;

    });


  }

  renderizaComprimentoColuna(valor: number, deg: string) {

    let calculo: number = Math.round((valor / this.totalDados) * this.valores);

    this.memoriaCor = this.gerardorCoresExadecimal();

    this.pedacoesPizza = this.pedacoesPizza +`${this.memoriaCor} ${this.memoriaValor}deg ${calculo}${deg} `;

    window.document.querySelector('.bloco .tabela')?.setAttribute('style', `background-image: conic-gradient(${this.pedacoesPizza});`);

  }

  gerardorCoresExadecimal() {

    let retorno: string = "";

    let rangeLetras: string = "a,b,c,d,e,f"; // 6
    let rangeNumeros: string = "0,1,2,3,4,5,6,7,8,9"; // 10

    retorno = `#${this.gerarValorAleatorio(rangeLetras, rangeNumeros)}`;

    retorno = retorno = retorno.replace("undefined", "0");

    return retorno;
  }

  gerarValorAleatorio(rangeLetras: string, rangeNumeros: string) {
    let max: number = 0;
    let min: number = 0;

    let retorno: string = "";

    for(let i = 0; i < 6; i++) {
      let controle: number = Math.round(Math.random() * (1 - 0) + 0);

      if(controle == 1) {
        max = 5;
        min = 0;
        let numeroGerado: number = Math.round(Math.random() * (max - min) + min);

        retorno = retorno + rangeLetras.split(',')[numeroGerado];

      }else {
        max = 10;
        min = 0;
        let numeroGerado: number = Math.round(Math.random() * (max - min) + min);

        retorno = retorno + rangeNumeros.split(',')[numeroGerado];

      }

    }

    retorno = retorno.replace("undefined", "0");

    return retorno;
  }

}
