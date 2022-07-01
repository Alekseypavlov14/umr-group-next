import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const URI = process.env.DB

export async function connect() {
  try {
    await mongoose.connect(URI)
  } catch (e) {
    console.log(e)
  }
}