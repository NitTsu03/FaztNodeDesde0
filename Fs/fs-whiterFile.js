const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
});

console.log('ultima linea del codigo');


// Ej de lo que hace NodeJs
MediaQueryList('select * FROM users', function (err, users) {
    if (err) {
        console.log(err);
    }
    if (users) {

    }
});