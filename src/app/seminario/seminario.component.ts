import { Component, OnInit } from '@angular/core';
import { SeminarioService } from '../service/seminario.service';
import { Seminario } from './modelo/seminario';

@Component({
  selector: 'ele-seminario',
  templateUrl: './seminario.component.html',
  styleUrls: ['./seminario.component.css'],
})
export class SeminarioComponent implements OnInit {
  inSeminario: Seminario = new Seminario();
  status: boolean = true;
  id: number = 0;
  constructor(private service: SeminarioService) {}

  ngOnInit(): void {}

  limpiarSeminario() {
    this.inSeminario.fecha_fin = '';
    this.inSeminario.fecha_inicio = '';
    this.inSeminario.nombre = '';
    this.inSeminario.url = '';
  }

  GuardarSeminario() {
    this.service.insertarSeminario(this.inSeminario).subscribe();
    this.service.getSeminario().subscribe();
  }

  EditarSeminario() {
    this.service.updateSeminario(this.id, this.inSeminario).subscribe();
  }

  traerStatus(status: boolean) {
    this.status = status;
  }
  traerId(id: number) {
    this.id = id;
    this.service.buscarSeminario(id).subscribe((e) => {
      this.inSeminario.fecha_fin = e.fecha_fin;
      this.inSeminario.fecha_inicio = e.fecha_inicio;
      this.inSeminario.nombre = e.nombre;
      this.inSeminario.url = e.url;
    });
  }
}
