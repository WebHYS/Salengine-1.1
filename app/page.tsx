import { prisma } from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <main style={{ fontFamily: 'sans-serif', margin: '2rem' }}>
      <h1>Salengine Prisma 7 Upgrade</h1>
      <p>Connected users: {users.length}</p>
    </main>
  )
}
