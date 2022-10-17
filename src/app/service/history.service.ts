import { Coin } from './../components/coins';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { delay, tap } from 'rxjs/operators'
import { HistoryCoin } from '../components/historyCoin';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {


/*API recebendo array com sigla e nome das moedas.
Atraveis desta função estou passando para a API o valor selecionado no campo Moedas.*/

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Coin[]>(`${API}/Moedas`)
    .pipe(
      tap(console.log)
    )
  }

/*API recebendo array com lista de cotação de compra, venda e data:
Atraveis desta função estou passando os valores inseridos contendo Sigla, Data inicial e Data Final.*/

  listSearch(nomeFormatado: string, dInicial: string, dFinal: string) {

    return this.http.get<HistoryCoin[]>(`${API}/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${nomeFormatado}'&@dataInicial='${dInicial}'&@dataFinalCotacao='${dFinal}'&$top=100&$format=json`)
    .pipe(
      delay(800),
      tap(console.log),
    )
  }

}
