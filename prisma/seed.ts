import { Prisma } from "@prisma/client"
import { prisma } from "../src/client"

// Execute seeding with: npx prisma db seed

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Peter",
    email: "peter@mail.com",
    posts: {
      create: [
        {
          title: "My firts post",
          content: "I'm seeding this content",
          published: true,
        },
      ],
    },
  },
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",
          content: "https://www.github.com/prisma/prisma/discussions",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
]

async function main() {
  console.log("Stat seeding..")
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user ${user.name} with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })