export interface Identify {
    apellidos: string,
    carnet: string;
    created_at: string
    email: string
    estado: number
    exp: number
    iat: number
    imagen: string
    nombres: string
    sub: number
}

export interface Usuarios {
    apellidos: string,
    carnet: string,
    created_at: string,
    direccion: string,
    email: string,
    estado: number,
    id: number,
    imagen: string,
    nombres: string,
    rol: string,
    updated_at: string
}