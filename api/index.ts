import express from "express"

const app = express()

app.use(express.json())

const server = app.listen(8000, () =>
  console.log(`Server ready at: http://localhost:8000`)
)
