// Initial Configuration
const ReadLine = require('readline');
let readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initial Function
function init() {
  console.clear();
  console.log('Bienvenido a RL-ED');
  console.log('Seleccione una Opción');
  console.log('1- Encode.');
  console.log('2- Decode.');
  console.log('3- Salir.');
  readLine.question('Opción: ', (input) => {
    switch(input.trim()) {
      case '1':
        encodeMenu();
        break;
      case '2':
        decodeMenu();
        break;
      case '3':
        process.exit();
      default:
        init();
        break;
    }
  });
}

//Encode Menu
function encodeMenu() {
  console.clear();
  console.log('Encode Menu');
  readLine.question('Digite Data: ', (input) => {
    if(input.trim().length > 0) {
      console.log('Data Codificada: ');
      console.log(encode(input));
      console.log(' ');
      console.log('¿Desea Repetir?');
      console.log('1- Si.');
      console.log('2- No.');
      readLine.question('Opción: ', (input) => {
        switch(input.trim()) {
          case '1':
            encodeMenu();
            break;
          case '2':
            init();
          default:
            encodeMenu();
            break;
        };
      });
    } else {
      console.log('Data Invalida');
      console.log('1- Ingresar Data Nuevamente');
      console.log('2- Salir');
      readLine.question('Opción: ', (input) => {
        switch(input.trim()) {
          case '1':
            encodeMenu();
            break;
          case '2':
            init();
          default:
            encodeMenu();
            break;
        };
      });
    };
  });
}

// Encode Function
function encode(data) {
  let encoded = [];
  let count = 1;
  let prev = data[0];

  for(let i = 1; i < data.length; i++) {
    if(data[i] !== prev) {
      encoded.push(count, prev);
      count = 1;
      prev = data[i];
    } else {
      count++;
    };
  };
  encoded.push(count, prev);
  return encoded;
};

//Decode Menu
function decodeMenu() {
  console.clear();
  console.log('Decode Menu');
  readLine.question('Digite Data: ', (input) => {
    if(input.trim().length > 0 && input.trim().length % 2 === 0) {
      console.log('Data Decodificada: ');
      console.log(decode(input));
      console.log(' ');
      console.log('¿Desea Repetir?');
      console.log('1- Si.');
      console.log('2- No.');
      readLine.question('Opción: ', (input) => {
        switch(input.trim()) {
          case '1':
            decodeMenu();
            break;
          case '2':
            init();
          default:
            decodeMenu();
            break;
        };
      });
    } else {
      console.log('Data Invalida');
      console.log('1- Ingresar Data Nuevamente');
      console.log('2- Salir');
      readLine.question('Opción: ', (input) => {
        switch(input.trim()) {
          case '1':
            decodeMenu();
            break;
          case '2':
            init();
          default:
            decodeMenu();
            break;
        };
      });
    };
  });
}

// Decode Function
function decode(code) {
  let decoded = [];
  code.split('').map((k, index) => {
    if(index % 2 === 0) {
      decoded.push(...Array(parseInt(k)).fill(code[index + 1]));
    };
  });
  return decoded;
};

init();
