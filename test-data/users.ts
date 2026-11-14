export type Usuario = {
  login: string;
  firstName: string;
  lastName: string;
  password: string;
};
export const nuevoUsuario = (cambios: Partial<Usuario> = {}): Usuario => {
  const id = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return {
    login: `qa1790221055${id}`,
    firstName: 'Javier',
    lastName: 'Rivera',
    password: 'ClaveSegura123!',
    ...cambios,
  };
};

export const CLAVE_6_CARACTERES = 'Abc#12';
