export interface User {
    msg:     string;
    token:   string;
    usuario: Usuario;
}

export interface Usuario {
    id:    string;
    email: string;
    rol:   string;
}
