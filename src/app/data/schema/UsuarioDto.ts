import { GenericDto } from './GenericDto';
export class UsuarioDto extends GenericDto {
  id?: number;
  nombre?: string;
  apellido?: string;
  fecha_nacimiento?: string;
  telefono?: string;
  direccion?: string;
  estado?: string;

  constructor(init?: Partial<UsuarioDto>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
}
