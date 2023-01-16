import { Nome } from './../model/Nome';
import { Valor } from './../model/Valor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-coluna',
  templateUrl: './grafico-coluna.component.html',
  styleUrls: ['./grafico-coluna.component.css']
})
export class GraficoColunaComponent implements OnInit {

  @Input() valorInput = 2000;
  @Input() rangeInput = 5;
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

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);

    this.gerenciaValores();
    this.gerenciaNomes();

    /* CHAMA O ARRAY GERADO PARA QUE POSSA SER RENDERIZADO NA TELA COM OS DADOS ATUAIS */
    setTimeout(() => {

      this.arrayNomes.map((item) => {

        this.renderizaComprimentoColuna(item.id, item.valor);

      });

    }, 700);

  }

  gerenciaValores() {

    let arryMemoria: Valor[] = [];

    while (this.memoria >= 0) {

      this.valor.numero = this.memoria;
      arryMemoria.push(this.valor);

      this.valor = new Valor();

      this.memoria = this.memoria - (this.valores / this.totalRange);

    }

    this.arrayValor = arryMemoria;

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

    this.arrayNomes = arryMemoria;

  }

  renderizaComprimentoColuna(seletorId: string, valor: number) {

    let calculo: number = (valor * 100) / this.valores;

    window.document.querySelector(`.bloco .tabela .${seletorId}`)?.setAttribute('style', `height: ${calculo}% !important; background-color: ${this.gerardorCoresExadecimal()};`);

  }

  gerardorCoresExadecimal() {

    let retorno: string = "";

    let rangeLetras: string = "a,b,c,d,e,f"; // 6
    let rangeNumeros: string = "0,1,2,3,4,5,6,7,8,9"; // 10

    retorno = `#${this.gerarValorAleatorio(rangeLetras, rangeNumeros)}`;

    console.log(retorno);

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
