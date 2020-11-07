import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaDto } from '../../data/schema/PersonaDto';
import { PersonaService } from '../../core/services/persona.service';

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
  constructor(private personaService: PersonaService) {}

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

  actualizarPersona(formulario: NgForm) {
    // console.log(formulario.value);
    console.log(this.personaDto);
    if (this.modoEdicion) {
      console.log('Actualizar');
      this.personaService.actualizarPersona(this.personaDto).subscribe(
        (res: any) => {
          // this.personaDto.push(res);
          this.limpiar();
          alert('Persona actualizada con exito');
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
          alert('Persona creada con exito');
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
