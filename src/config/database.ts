import sql from 'mssql';
import dotenv from 'dotenv'

dotenv.config();   // <-- OBRIGATÓRIO
export const sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: "GS300GP",
  server: "DBSOL\\DBSOL",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};


let pool: sql.ConnectionPool | null = null;

export const getDbConnection = async () => {
    if (!pool) {
        pool = await new sql.ConnectionPool(sqlConfig).connect();
        console.log("SQL Server conectado...");
    }
    return pool;
};

