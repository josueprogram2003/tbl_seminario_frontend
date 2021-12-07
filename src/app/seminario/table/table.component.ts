import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SeminarioService } from 'src/app/service/seminario.service';
import { Seminario } from '../modelo/seminario';

@Component({
  selector: 'ele-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() seminario: Seminario = new Seminario();
  inSeminario: any[] = [];
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  @Output() id: EventEmitter<number> = new EventEmitter();
  ngOnInit(): void {
    this.getSeminario();
    console.log('paso');
  }

  constructor(private service: SeminarioService) {}
  ngOnChanges(): void {
    this.getSeminario();
  }

  getSeminario() {
    this.service.getSeminario().subscribe((e) => {
      console.log(e);
      this.inSeminario = e;
    });
  }

  actualizar(id: number) {
    this.status.emit(false);
    this.id.emit(id);
  }

  eliminar(id: number) {
    this.service.eiminarSeminario(id).subscribe();
    this.getSeminario();
  }
}
