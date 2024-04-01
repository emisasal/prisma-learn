import express from "express"
import { prisma } from "./db"

import userRoutes from "./routes/user.route"

const app = express()
const port = 8000

async function main() {
  app.use(express.json())

  // Registered routes
  app.use("/api", userRoutes)

  // Catch unregistered routes
  app.all("*", (req, res) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` })
  })

  app.listen(8000, () =>
    console.log(`Server ready at: http://localhost:${port}`)
  )
}

// If db connection fails prisma disconnects and exit
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
