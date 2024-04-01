import express from "express"

import routes from "./routes/index"

const app = express()
const port = 8000

app.use(express.json())

// Registered routes
app.use("/api", routes)

// Catch unregistered routes
app.all("*", (req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` })
})

app.listen(8000, () => console.log(`Server ready at: http://localhost:${port}`))
