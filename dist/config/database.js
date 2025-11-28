"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbConnection = exports.sqlConfig = void 0;
const mssql_1 = __importDefault(require("mssql"));
exports.sqlConfig = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: "GS300GP",
    server: "DBSOL\\DBSOL",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
let pool = null;
const getDbConnection = async () => {
    if (!pool) {
        pool = await new mssql_1.default.ConnectionPool(exports.sqlConfig).connect();
        console.log("SQL Server conectado...");
    }
    return pool;
};
exports.getDbConnection = getDbConnection;
