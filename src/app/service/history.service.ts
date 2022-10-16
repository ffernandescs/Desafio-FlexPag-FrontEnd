import { Moeda } from './../components/moeda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { tap } from 'rxjs/operators'
import { HistoryCoin } from '../components/historyCoin';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Moeda[]>(`${API}/Moedas`)
    .pipe(
      tap(console.log)
    )
  }

  listSearch(nomeFormatado: string, dInicial: string, dFinal: string) {

    return this.http.get<HistoryCoin[]>(`${API}/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${nomeFormatado}'&@dataInicial='${dInicial}'&@dataFinalCotacao='${dFinal}'&$top=100&$format=json`)
    .pipe(
      tap(console.log)
    )
  }

  listData(nomeFormatado: string, dFinal: string) {
    return this.http.get<HistoryCoin[]>(`${API}/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${nomeFormatado}'&@dataInicial='${dFinal}'&@dataFinalCotacao='${dFinal}'&$top=100&$format=json`)
    .pipe(
      tap(console.log)
    )
  }


}
