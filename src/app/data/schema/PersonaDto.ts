import { GenericDto } from './GenericDto';
export class PersonaDto extends GenericDto {
  id?: number;
  nombre?: string;
  apellido?: string;
  fecha_nacimiento?: string;
  telefono?: string;
  direccion?: string;
  estado?: string;

  constructor(init?: Partial<PersonaDto>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
}
