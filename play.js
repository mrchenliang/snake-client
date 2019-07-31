const { connect } = require('./client');
let conn;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    conn.write('Move: up');
  } else if (data === 'a') {
    conn.write('Move: left');
  } else if (data === 's') {
    conn.write('Move: down');
  } else if (data === 'd') {
    conn.write('Move: right');
  }
}

const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

console.log('Connecting ...');
setupInput(connect());
