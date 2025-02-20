import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  database: process.env.DB_NAME || "dashboard",
  entities: ["src/modules/**/entities/*.ts"],
  migrations: ["src/shared/infra/database/migrations/*.ts"],
  synchronize: true, // Somente para desenvolvimento (cria tabelas automaticamente)
});

AppDataSource.initialize()
  .then(() => console.log("📦 Conectado ao banco de dados"))
  .catch((err) => console.error("Erro ao conectar ao banco:", err));
