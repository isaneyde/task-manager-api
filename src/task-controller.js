import taskSchema from "./task-model.js";

export const createTask=async(req, res)=>{
    try {
      const newTask= await taskSchema.create(req.body);
        res.status(201).json({message:"tarefa criada com sucesso", task:newTask});
        console.log(newTask);
    } catch (error) {
        res.status(500)
        .json({message:"Ocorreu um erro interno no servidor", error})
        
    }

}

