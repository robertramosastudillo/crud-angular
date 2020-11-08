import { Injectable } from '@angular/core';
import { PersonaDto } from '../../data/schema/PersonaDto';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { GenericDto } from '../../data/schema/GenericDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService extends HttpService<GenericDto> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, environment.baseUrl + '/persona');
  }

  obtenerPersonas(): Observable<PersonaDto[]> {
    return super.get('obtenerPersonas', 'Error al consultar las personas.');
  }

  crearPersona(personaDto: PersonaDto): Observable<any> {
    return super.post('crearPersona', 'Error al crear la persona.', personaDto);
  }

  actualizarEstadoPersona(idPersona: number): Observable<any> {
    return super.post(
      '/actualizarEstadoPersona',
      'Error al actualizar el estado de la persona.',
      idPersona
    );
  }

  eliminarPersona(idPersona: number): Observable<any> {
    return super.post(
      '/eliminarPersona',
      'Error al eliminar a la persona.',
      idPersona
    );
  }

  actualizarPersona(personaDto: PersonaDto): Observable<any> {
    return super.post(
      'actualizarPersona',
      'Error al actualizar la persona.',
      personaDto
    );
  }
}
