import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';
import { HistoryCoin } from '../historyCoin';
import { Coin } from '../coins';
import { interval } from 'rxjs';
import * as moment from 'moment'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {


  bsModalRef?: BsModalRef;
  simbolCoins: Coin[]
  historiCoins: HistoryCoin[]
  coin: any = {
    simbolo: '',
    dateInitial: '',
    dateFinal: '',
  }
  searchVenda: any
  searchCompra: any
  searchText: any
  momentForm!: FormGroup
  submitted: false
  loading: boolean = true

  todayDate = new Date()
  result: string

  constructor(
    private service: HistoryService,
    private formBuild: FormBuilder,
    private modalService: BsModalService
    ) {

      /*Faz aparecer um loading assim que a pagina é carregada */
      const obs$ = interval((500))
      obs$.subscribe((d) => {
        this.loading = false
      })
    }

  /*Função para o botão 'Limpar Formulario'*/
  reset() {
    this.momentForm.reset()
    this.resetInput()
  }

  resetInput() {
    this.searchCompra = ''
    this.searchVenda = ''
    this.searchText = ''
  }



  /*Função que identifica se o Campo data inicial é maior que data Final e mostra um modal na tela */

  handleError(dataI: string, dataF: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = `Error: Data inicial (${dataI}) não pode ser maior que Data Final (${dataF})!`;
  }

  /*Função que lista valores de cotação de compra, venda e data em tabela
  para solucionar o formato da data na API, utilizei do modulo moment.js
  */

  getValues() {
    let dataFormatInitial = moment(this.coin.dateInitial)
    .format('MM-DD-YYYY')
    let dataFormatFinal = moment(this.coin.dateFinal)
    .format('MM-DD-YYYY')

    /*Aqui passei um condição, para identificar se a data inicial é maior que a data final
    ou listar dados na tabela vindo da api.*/

    if(dataFormatInitial <= dataFormatFinal) {
      this.service.listSearch(this.coin.simbolo, dataFormatInitial, dataFormatFinal).subscribe(dados => this.historiCoins = dados.value)
    } else {
      let dataFormatOrInitial = moment(this.coin.dateInitial)
      .format('DD-MM-YYYY')
      let dataFormatOrFinal = moment(this.coin.dateFinal)
      .format('DD-MM-YYYY')
      this.handleError(dataFormatOrInitial, dataFormatOrFinal)
    }
    this.resetInput()
  }

  /*Recebe da api a lista de Sigla e nome de moedas onde este valor é inserido na tag select */

  historyList() {
    this.service.list()
    .subscribe(dados => this.simbolCoins = dados.value);
  }

  /*Função de validação de Campos, identifica se o mesmo foi preenchido ou não */

  validationInput() {
    this.momentForm = this.formBuild.group({
        coins: ['', Validators.required],
        initialDt: ['', Validators.required],
        finalDt: ['', Validators.required]
    })
  }

  get coins() {
    return this.momentForm.get('coins')!;
  }
  get initialDt() {
    return this.momentForm.get('initialDt')!;
  }
  get finalDt() {
    return this.momentForm.get('finalDt')!;
  }

  /*Função que inicia lista de sigla e validação de campos */

  ngOnInit(): void {
    this.historyList()
    this.validationInput()
  }
}

