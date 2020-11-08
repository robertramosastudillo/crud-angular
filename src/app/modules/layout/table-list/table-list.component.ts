import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit, OnChanges {
  @Input() data = new Array();

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'fecha_nacimiento',
    'telefono',
    'direccion',
    // 'estado',
  ];
  columnas = [
    { titulo: 'Nombre', name: 'nombre' },
    { titulo: 'Apellido', name: 'apellido' },
    { titulo: 'Fecha Nacimiento', name: 'fecha_nacimiento' },
    { titulo: 'Telefono', name: 'telefono' },
    { titulo: 'Direccion', name: 'direccion' },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.data);
  }
}
