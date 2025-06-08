import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { createTask, deleteTask} from "./src/task-controller.js";

dotenv.config();
const app=express(); 
const port=process.env.PORT;
app.use(express.json());
app.use(cors());
app.post("/task", createTask);
app.delete("/task/:id", deleteTask);
mongoose
.connect(process.env.BD_URI)
.then(()=>console.log("BD conectada com sucesso"))
.catch((error)=>
console.log("Ocorreu um erro ao conectar com a BD:", error));


app.listen(port,()=>console.log(`Server running on :${port}`));