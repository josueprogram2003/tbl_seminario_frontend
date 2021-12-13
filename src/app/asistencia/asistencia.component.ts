import { Component, OnInit } from '@angular/core';
import { SeminarioService } from '../service/seminario.service';

@Component({
  selector: 'ele-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],
})
export class AsistenciaComponent implements OnInit {
  asistencia: any[] = [];
  constructor(private asistenciaseminario: SeminarioService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.asistenciaseminario.listarAsistencia().subscribe((e) => {
      this.asistencia = e;
    });
  }
}
