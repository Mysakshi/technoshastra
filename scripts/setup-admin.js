import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import 'dotenv/config';

async function setupAdmin() {
  const host = process.env.DB_HOST || 'localhost';
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'technoshashtra';

  console.log('Connecting to MySQL Server...');
  try {
    const connection = await mysql.createConnection({ host, user, password, database });
    
    // Create users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table "users" created or already exists.');

    // Check if admin exists
    const [rows] = await connection.query("SELECT * FROM users WHERE email = 'admin@technoshashtra.com'");
    
    if (rows.length === 0) {
      // Hash password (the default password will be 'admin123')
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash('admin123', saltRounds);

      await connection.query(
        "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
        ['Admin', 'admin@technoshashtra.com', hashedPassword]
      );
      console.log('Default admin user created. Email: admin@technoshashtra.com, Password: admin123');
    } else {
      console.log('Admin user already exists.');
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
