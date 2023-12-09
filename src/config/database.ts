import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "social",
  multipleStatements: true,
});

// export const query = util.promisify(db.query).bind(db);
