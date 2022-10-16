import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';
import { HistoryCoin } from '../historyCoin';
import { Moeda } from '../moeda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

  moedas: Moeda[]
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

  constructor(
    private service: HistoryService,
    private formBuild: FormBuilder
    ) { }

  teste() {
  }

  getValues(val: []) {
    let newDataInital = this.coin.dateInitial
    let dataInital = newDataInital
    let dataFormatInitial = dataInital.replace(/(\d*)-(\d*)-(\d*).*/, '$2-$3-$1');
    console.log(dataFormatInitial, 'asd')
    let newDataFinal = this.coin.dateFinal
    let dataFinal = newDataFinal
    let dataFormatFinal = dataFinal.replace(/(\d*)-(\d*)-(\d*).*/, '$2-$3-$1');
    if(dataInital <= dataFinal) {
      this.service.listSearch(this.coin.simbolo, dataFormatInitial, dataFormatFinal).subscribe(search => this.historiCoins = search.value)
    } else {
      alert('Favor digite data Inicio maior que data Final ')
    }
  }

  getInputs() {

  }

  getData(val: string) {
    this.service.listData(this.coin.simbolo, this.coin.dataInicial).subscribe(data => this.historiCoins = data.values)
  }

  historyList() {
    this.service.list().subscribe(dados => this.moedas = dados.value);
  }

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

  ngOnInit(): void {
    this.historyList()
    this.validationInput()

  }



}
