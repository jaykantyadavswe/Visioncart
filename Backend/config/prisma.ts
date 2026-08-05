import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

export default prisma;