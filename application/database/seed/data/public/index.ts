import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./seedUsers";



const seedPublicData = async () => {
    console.log('Seeding data for schema public')

    const prismaClient = new PrismaClient();

    seedUsers(prismaClient)
};

export default seedPublicData