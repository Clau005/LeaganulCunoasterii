import { PrismaClient } from "@prisma/client";
import { seedUsers } from "../public/seedUsers";



const seedAccessData = async( prismaClient: PrismaClient ) => {
    console.log('Seeding data for schema access')
    // await seedUsers(prismaClient)
};

export default seedAccessData