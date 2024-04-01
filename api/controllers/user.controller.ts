import { Request, Response } from "express"
import { prisma } from "../db"

export const createUser = async (req: Request, res: Response) => {
  const { email, name, lastname } = req.body
  try {
    const newUser = prisma.user.upsert({
      where: {
        email: email,
      },
      update: {}, // Keep empty object for find or create
      create: {
        email: email,
        name: name,
        lastname: lastname,
      },
    })
    res.status(201).send(newUser)
  } catch (error) {
    return res.status(401).send({ error })
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = prisma.user.findMany()
    res.status(200).send(users)
  } catch (error) {
    return res.status(401).send({ error })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    })
    if (!user) return res.status(401).json("User not found")
    res.status(200).send(user)
  } catch (error) {
    return res.status(401).send({ error })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updatedUser = prisma.user.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    })
    res.status(200).send(updatedUser)
  } catch (error) {
    return res.status(401).send({ error })
  }
}

export const deleteUser = (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedUser = prisma.user.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(204)
  } catch (error) {
    return res.status(401).send({ error })
  }
}
