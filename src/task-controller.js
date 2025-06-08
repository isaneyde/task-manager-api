import taskSchema from "./task-model.js";

export const createTask=async(req, res)=>{
    try {
      const newTask= await taskSchema.create(req.body);
        res.status(201).json({message:"tarefa criada com sucesso", task:newTask});
    } catch (error) {
        res.status(500)
        .json({message:"Ocorreu um erro interno no servidor", error})
        
    }

}

export const deleteTask=async(req,res)=>{
    try {
       const oldTask= await taskSchema.findByIdAndDelete(
        req.params.id,
       ) ;
       res.json({message:"Tarefa eliminada com sucesso", oldTask});
    } catch (error) {
      res.status(404).json(error);  
    }
}