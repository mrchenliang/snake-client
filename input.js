let conn;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log("quitting!!")
    process.exit();
  } else if (data === 'w') {
    conn.write('Move: up');
  } else if (data === 'a') {
    conn.write('Move: left');
  } else if (data === 's') {
    conn.write('Move: down');
  } else if (data === 'd') {
    conn.write('Move: right');
  } else if (data === 'f') {
    conn.write('Say: winner!');
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

setupInput();

module.exports = { setupInput };