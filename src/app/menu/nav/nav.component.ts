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
  @Output() link: EventEmitter<number> = new EventEmitter();
  @Input() opened: boolean = true;
  estado_desplegar1: boolean = false;
  estado_desplegar2: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  seminario() {
    this.link.emit(1);
  }

  asistencia() {
    this.link.emit(4);
  }
}
