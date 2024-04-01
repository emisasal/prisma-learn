import { Request, Response } from "express"
import { prisma } from "../db"

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = prisma.user.findMany()
    res.status(200).send(posts)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

// Complete missing controllers
