import mysql from 'mysql2/promise';
import 'dotenv/config';

async function initDB() {
  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'TechnoshastraX';

  console.log('Connecting to MySQL Server to initialize database...');
  try {
    const connection = await mysql.createConnection({ host, user, password });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
    console.log(`Database '${database}' created or already exists.`);
    
    await connection.changeUser({ database });
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS jobs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        job_type VARCHAR(100) NOT NULL,
        skills TEXT NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "jobs" created or already exists.');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_name VARCHAR(255) NOT NULL,
        duration VARCHAR(100) NOT NULL,
        level VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "courses" created or already exists.');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT,
        session_date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "sessions" created or already exists.');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "users" created or already exists.');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS popups (
        id INT PRIMARY KEY DEFAULT 1,
        is_active BOOLEAN DEFAULT FALSE,
        title VARCHAR(255),
        description TEXT,
        image_url TEXT,
        link_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "popups" created or already exists.');

    // Initialize popup settings if they don't exist
    const [rows] = await connection.query('SELECT * FROM popups LIMIT 1');
    if (rows.length === 0) {
      await connection.query('INSERT INTO popups (id, is_active, title, description) VALUES (1, false, "Welcome", "Welcome to TechnoshastraX!")');
      console.log('Default popup settings initialized.');
    }

    await connection.end();
    console.log('Database initialization complete.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
}

initDB();
