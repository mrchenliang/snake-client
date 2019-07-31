const net = require("net");
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.0.110",
    port: 50541
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