

// Data Tables
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// Servicios
import { UsuariosService } from './../../../services/usuarios.service';

// Interfaces
import { Usuarios } from './../../../models/interfaces';

@Component({
  selector: 'app-app-usuarios',
  templateUrl: './app-usuarios.component.html',
  styleUrls: ['./app-usuarios.component.css']
})
export class AppUsuariosComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = [  // Siempre en minusculas(Cualquier nombre)
    'codigo',
    'carnet',
    'nombres',
    'apellidos',
    'direccion',
    'email',
    'rol',
    'estado',
    'imagen',
    'acciones'
  ];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private usuariosServices: UsuariosService) {
  }

  ngOnInit(): void {
    this.usuariosServices.indexUsuarios().subscribe(resp => this.dataSource.data = resp.usuarios);
  }

  // Se ejecuta cuando se inicia la visializacion del componente en si
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
