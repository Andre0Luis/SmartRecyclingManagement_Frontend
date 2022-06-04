import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StatusMensalDTO } from '../data/statusMensalDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('api/products');
  }

  getConsumoMensal(id: Number) {
    return this.http.get<StatusMensalDTO>(environment.BACKEND_SMR + 'listaCompra/consumo-mensal/' + id);
  }
}
