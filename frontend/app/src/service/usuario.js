import { http } from './config';

export default {
    salvar: (usuario) => {
        return http.post('usuarios', usuario);
    },
}