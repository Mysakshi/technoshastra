import mysql from 'mysql2/promise';

console.log('Database Environment check:', {
  host: process.env.DB_HOST ? 'exists' : 'missing',
  user: process.env.DB_USER ? 'exists' : 'missing',
  port: process.env.DB_PORT ? 'exists' : 'missing',
  name: process.env.DB_NAME ? 'exists' : 'missing'
});
console.log(`Connecting to database at ${process.env.DB_HOST}:${process.env.DB_PORT || 3306}...`);

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'TechnoshastraX',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,


  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
