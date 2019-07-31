const net = require("net");
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn 
  = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("connected!!");
    conn.write("Name: S3X \n");
      // conn.write("Move: up");
      // conn.write("Move: up");
    conn.on("data", data => {
      console.log("Server says: ", data);
      });
    });
  return conn;
};

// Name: SNK

module.exports = { connect };