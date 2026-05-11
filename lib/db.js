import mysql from 'mysql2/promise';

const getDBConfig = () => {
  const config = {
    host: process.env.DB_HOST || process.env.NEXT_PUBLIC_DB_HOST || 'localhost',
    user: process.env.DB_USER || process.env.NEXT_PUBLIC_DB_USER || 'root',
    password: process.env.DB_PASSWORD || process.env.NEXT_PUBLIC_DB_PASSWORD || '',
    database: process.env.DB_NAME || process.env.NEXT_PUBLIC_DB_NAME || 'TechnoshastraX',
    port: parseInt(process.env.DB_PORT || process.env.NEXT_PUBLIC_DB_PORT || '3306'),
  };

  console.log('Database Connection Attempt:', {
    host: config.host === 'localhost' ? 'localhost (DEFAULT)' : config.host,
    port: config.port,
    database: config.database,
    user: config.user
  });

  return config;
};

const pool = mysql.createPool({
  ...getDBConfig(),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export default pool;
