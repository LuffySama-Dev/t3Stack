import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'Kle2',
  //       age: 12,
  //       email: 'kle2@test1.com',
  //     },
  //     {
  //       name: 'Kle2',
  //       age: 13,
  //       email: 'kle2@test2.com',
  //     },
  //   ],
  // });

  const user = await prisma.user.findMany({
    where: {
      name: 'Kle2',
    },
    // distinct: ['name', 'age'],
    orderBy: {
      age: 'desc',
    },
    // take: 2, // Pagination
    // skip: 1,
  });

  // const user = await prisma.user.findUnique({
  //   // where: {
  //   //   email: 'kyle@test.com',
  //   // },
  //   where: {
  //     age_name: {
  //       age: 28,
  //       name: 'Kle2',
  //     },
  //   },
  // });

  //   const user = await prisma.user.create({ data: { name: 'APS' } });
  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'Kle',
  //       email: 'kyle@test.com',
  //       age: 27,
  //       // userPreference: {
  //       //   create: {
  //       //     emailUpdates: true,
  //       //   },
  //       // },
  //     },
  //     {
  //       name: 'Kle2',
  //       email: 'kyle2@test.com',
  //       age: 28,
  //     },
  //   ],
  // include: {
  //   userPreference: true,
  // },
  // Inside many we cannot use Select Caluse
  // select: {
  //   name: true,
  //   userPreference: { select: { id: true } },
  // },
  // });

  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.messsage);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
