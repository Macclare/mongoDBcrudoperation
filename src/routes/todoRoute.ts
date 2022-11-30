import express from "express"
import { createTodo, getTodo, updateTodo, removeTodo } from "../controller/todoController"

const router = express.Router()

router.get("/get-todos", getTodo)
router.post("/create", createTodo)
router.patch("/update-todo/:id", updateTodo)
router.delete("/remove-todo/:id", removeTodo)



export default router;