

  /* Tabla de users_test_luis_mario_sandoval */
  DROP TABLE IF EXISTS users_test_luis_mario_sandoval;
  CREATE TABLE users_test_luis_mario_sandoval(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,

    vc_nombre VARCHAR(50) NOT NULL,
    vc_segundoNombre VARCHAR(50) NULL,
    vc_apellidoPaterno VARCHAR(50) NOT NULL,
    vc_apellidoMaterno VARCHAR(50) NOT NULL,
    dt_nacimiento DATE NOT NULL,
    vc_email VARCHAR(50) NOT NULL,
    vc_telefono VARCHAR(50) NOT NULL,

    dt_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY( id )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;