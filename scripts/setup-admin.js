import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import 'dotenv/config';

async function setupAdmin() {
  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'TechnoshastraX';

  console.log('Connecting to MySQL Server...');
  try {
    const connection = await mysql.createConnection({ host, user, password, database });

    // Create users table
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

    // Check if admin exists
    const [rows] = await connection.query("SELECT * FROM users WHERE username = 'admin'");

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('admin123', saltRounds);

    if (rows.length === 0) {
      await connection.query(
        "INSERT INTO users (name, username, password_hash) VALUES (?, ?, ?)",
        ['Admin', 'admin', hashedPassword]
      );
      console.log('Default admin user created. Username: admin, Password: admin123');
    } else {
      await connection.query(
        "UPDATE users SET password_hash = ? WHERE username = 'admin'",
        [hashedPassword]
      );
      console.log('Admin user password updated to admin123.');
    }

    await connection.end();
    console.log('Admin setup complete.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to setup admin user:', error);
    process.exit(1);
  }
}

setupAdmin();
