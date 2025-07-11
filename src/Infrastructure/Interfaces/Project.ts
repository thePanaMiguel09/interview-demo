export interface Project {
    msg:  string;
    data: Datum[];
}

export interface Datum {
    _id:              string;
    titulo:           string;
    area:             string;
    objetivos:        string;
    cronograma:       string;
    presupuesto:      number;
    institucion:      Institucion;
    docente:          Nte | null;
    integrantes:      Nte[];
    observaciones:    string;
    estadoActual:     string;
    avances:          Avance[];
    createdAt:        Date;
    updatedAt:        Date;
    __v:              number;
    historialEstados: HistorialEstado[];
}

export interface Avance {
    descripcion: string;
    fecha:       Date;
    evidencias:  string[];
    _id:         string;
}

export interface Nte {
    _id:                  string;
    nombres:              string;
    apellidos:            string;
    tipoIdentificacion:   string;
    numeroIdentificacion: string;
    email:                string;
    rol:                  string;
    isActive:             boolean;
    createdAt:            Date;
    updatedAt:            Date;
    __v:                  number;
}

export interface HistorialEstado {
    estado:      string;
    observacion: string;
    fecha:       Date;
    _id:         string;
}

export interface Institucion {
    location:      Location;
    _id:           string;
    nameInstitute: string;
    id:            number;
    isActive:      boolean;
    createdAt:     Date;
    updatedAt:     Date;
    __v:           number;
}

export interface Location {
    city:       string;
    department: string;
}
