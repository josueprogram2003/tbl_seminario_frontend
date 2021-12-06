import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ele-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() link: EventEmitter<string> = new EventEmitter();
  @Input() opened: boolean = true;
  estado_desplegar1: boolean = false;
  estado_desplegar2: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  asignar(): void {
    this.link.emit('equipo-tecnico/asignar-banco-modulo');
  }
  seguimientoSocio(): void {
    this.link.emit('asesor');
  }
  enviarParticipacion(): void {
    this.link.emit('equipo-tecnico/reportes/reporte-participacion');
  }
  enviarParticipantes(): void {
    this.link.emit('equipo-tecnico/reportes/reporte-participantes');
  }

  enviarSeminario(): void {
    this.link.emit('equipo-tecnico/reportes/reporte-seminario');
  }

  enviarBancaModulo(): void {
    this.link.emit('equipo-tecnico/bancaModulo');
  }

  enviarControlarModulo(): void {
    this.link.emit('equipo-tecnico/controlarModulo');
  }

  enviarCrearSeminario(): void {
    this.link.emit('equipo-tecnico/crearSeminario');
  }
}
