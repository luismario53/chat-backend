const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (request, response) => {
  mysqlConnection.query('SELECT * FROM users_test_luis_mario_sandoval', (error, rows, fields) => {
    if (!error) {
      response.json(rows);
    } else {
      console.log(error);
    }
  });
});

router.post('/api/users', (request, response) => {

  if (!request.body.vc_nombre ||
    !request.body.vc_apellidoPaterno ||
    !request.body.vc_apellidoMaterno ||
    !request.body.dt_nacimiento ||
    !request.body.vc_email ||
    !request.body.vc_telefono) {
    return response.status(201).json({ message: 'Debe llenar todos los campos.' })
  }

  const {
    vc_nombre, vc_segundoNombre, vc_apellidoPaterno, vc_apellidoMaterno,
    dt_nacimiento,
    vc_email, vc_telefono
  } = request.body;

  mysqlConnection.beginTransaction(error => {
    if (error) {
      console.log(error);
    }

    mysqlConnection.query("SELECT count(*) FROM users_test_luis_mario_sandoval WHERE vc_email = '" + vc_email + "'",
      (error, result) => {
        if (!error) {
          if (result[0]['count(*)'] > 0) {
            return response.status(201).json({ message: 'El usuario ya se encuentra registrado.' })
          } else {
            mysqlConnection.query('INSERT INTO users_test_luis_mario_sandoval SET ?', {
              vc_nombre,
              vc_segundoNombre,
              vc_apellidoPaterno,
              vc_apellidoMaterno,
              dt_nacimiento,
              vc_email,
              vc_telefono
            });

            mysqlConnection.commit(function (error) {
              if (error) {
                return mysqlConnection.rollback(function () {
                  return response.status(500).json({
                    error: error,
                    message: 'No se pudo registrar al usuario.'
                  });
                });
              }else{
                response.status(200).json({
                  message: 'Usuario registrado correctamente.'
                });
              }
            });
          }
        }
      });
  });

});

module.exports = router;