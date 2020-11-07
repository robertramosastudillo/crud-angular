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

  modoEdicion = false;

  @ViewChild('formulario', { static: false }) slForm: NgForm;
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {}

  actualizarPersona(formulario: NgForm) {
    // console.log(formulario.value);
    console.log(this.personaDto);
    if (this.modoEdicion) {
      console.log('Actualizar');
      // this.impuestosService.actualizarImpuesto(this.impuesto).subscribe(
      //   (res: any) => {
      //     this.impuestos = this.impuestos.filter(
      //       (obj) => obj !== this.impuestosEdit
      //     );
      //     this.impuestos.push(res);
      //     this.prepareDatatable();
      //     this.limpiar();
      //     this.alertService.success('Impuesto actualizado con éxito.');
      //     this.obtenerImpuestos();
      //   },
      //   (error) => {
      //     this.alertService.error(error);
      //   }
      // );
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
