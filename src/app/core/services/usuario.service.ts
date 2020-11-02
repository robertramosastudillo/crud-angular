import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { GenericDto } from '../../data/schema/GenericDto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../../data/schema/UsuarioDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends HttpService<GenericDto> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, environment.baseUrl + '/usuarios');
  }

  obtenerUsuarios(): Observable<UsuarioDto[]> {
    return super.get('obtenerUsuarios', 'Error al consultar los usuarios.');
  }

  crearUsuario(usuarioDto: UsuarioDto): Observable<any> {
    return super.post('crearUsuario', 'Error al crear el usuario.', usuarioDto);
  }
}
