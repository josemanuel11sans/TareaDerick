create database Cursos;
use Cursos;
create table ALUMNOS(
dni int PRIMARY KEY NOT NULL,
nombre varchar(30) not null,
domicilio varchar (45) not null
)

create table CURSOS(
idCurso int primary key not null,
nombre varchar(45) not null
)


create table ASIDE(
alumno_dni int,
curso_id int,
nota varchar(45) not null,
foreign key(alumno_dni) references alumnos(dni),
foreign key(curso_id) references cursos(idCurso)
)

}-- Insertar valores de ejemplo en la tabla ALUMNOS
INSERT INTO ALUMNOS (dni, nombre, domicilio) VALUES
(123456789, 'Juan Pérez', 'Calle 123, Ciudad'),
(987654321, 'María García', 'Avenida Principal, Ciudad'),
(555666777, 'Carlos Martínez', 'Plaza Central, Ciudad');

-- Insertar valores de ejemplo en la tabla CURSOS
INSERT INTO CURSOS (idCurso, nombre) VALUES
(1, 'Matemáticas'),
(2, 'Historia'),
(3, 'Ciencias Naturales');

DELETE FROM ASIDE;
-- Insertar valores de ejemplo en la tabla ASIDE
INSERT INTO ASIDE (alumno_dni, curso_id, nota) VALUES
(123456789, 1, '8.5'),
(987654321, 2, '7.0'),
(555666777, 3, '9.2');

select * from aside; 
select * from cursos limit 2;

