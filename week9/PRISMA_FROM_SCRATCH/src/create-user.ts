import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "hello@gmail.com",
            name: "Hardik"
        }
    })
}

main()
.then(async () => {
    console.log("Done with the query.")
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})