import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { GenericDto } from '../../data/schema/GenericDto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PersonaDto } from '../../data/schema/PersonaDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends HttpService<GenericDto> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, environment.baseUrl + '/usuarios');
  }

  obtenerUsuarios(): Observable<PersonaDto[]> {
    return super.get('obtenerPersonas', 'Error al consultar las personas.');
  }

  crearUsuario(personaDto: PersonaDto): Observable<any> {
    return super.post('crearPersona', 'Error al crear la persona.', personaDto);
  }
}
