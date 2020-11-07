import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaDto } from '../../data/schema/PersonaDto';
import { PersonaService } from '../../core/services/persona.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../modules/layout/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  providers: [PersonaService],
})
export class PersonaComponent implements OnInit {
  // Objects
  personaDto: PersonaDto = new PersonaDto();

  // ArrayLists
  listadoPersonasDto: Array<PersonaDto> = new Array<PersonaDto>();

  modoEdicion = false;

  @ViewChild('formulario', { static: false }) slForm: NgForm;
  constructor(
    private personaService: PersonaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this.personaService.obtenerPersonas().subscribe(
      (res) => {
        this.listadoPersonasDto = res;
      },
      (error) => {
        alert(error);
      }
    );
  }

  actualizarEstadoPersona(idPersona) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Está seguro(a) que desea proceder?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.personaService.actualizarEstadoPersona(idPersona).subscribe(
          (res: any) => {
            this.obtenerPersonas();
            this.limpiar();
            console.log('Estado actualizado');
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('No se realizó ninguna acción');
      }
    });
  }

  eliminarPersona(idPersona) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Está seguro(a) que desea proceder?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.personaService.eliminarPersona(idPersona).subscribe(
          (res: any) => {
            this.obtenerPersonas();
            this.limpiar();
            console.log('Persona eliminada');
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('No se realizó ninguna acción');
      }
    });
  }

  actualizarPersona(formulario: NgForm) {
    // console.log(formulario.value);
    console.log(this.personaDto);
    if (this.modoEdicion) {
      console.log('Actualizar');
      this.personaService.actualizarPersona(this.personaDto).subscribe(
        (res: any) => {
          // this.personaDto.push(res);
          this.limpiar();
          console.log('Persona actualizada con exito');
        },
        (error) => {
          alert(error);
        }
      );
    } else {
      console.log('Crear');
      this.personaService.crearPersona(this.personaDto).subscribe(
        (res: any) => {
          // this.personaDto.push(res);
          this.limpiar();
          console.log('Persona creada con exito');
        },
        (error) => {
          alert(error);
        }
      );
    }
  }

  limpiar() {
    this.slForm.resetForm();
    this.modoEdicion = false;
  }
}
