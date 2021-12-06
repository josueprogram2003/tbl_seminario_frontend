import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ele-navtop',
  templateUrl: './navtop.component.html',
  styleUrls: ['./navtop.component.css'],
})
export class NavtopComponent implements OnInit {
  @Output() statusSidebar: EventEmitter<boolean> = new EventEmitter();
  estadoActual = true;
  nombre = sessionStorage.getItem('nombreusuario');
  rol = sessionStorage.getItem('rol');
  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    if (this.estadoActual == false) {
      this.estadoActual = true;
      this.statusSidebar.emit(this.estadoActual);
    } else {
      this.estadoActual = false;
      this.statusSidebar.emit(this.estadoActual);
    }
  }

  recargarPagina() {
    window.location.reload();
  }
}
