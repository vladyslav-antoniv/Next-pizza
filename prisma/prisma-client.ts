import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  // 👇 НОВИЙ СПОСІБ: Передаємо URL тут
  return new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL, 
  });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
