import { prisma } from '../src/lib/prisma'

async function main() {
  await prisma.user.upsert({
    where: { email: 'demo@salengine.local' },
    update: {},
    create: {
      email: 'demo@salengine.local',
      name: 'Demo User',
    },
  })

  console.log('Seed completed')
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
