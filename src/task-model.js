import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  content:{type: String,
  required: true,
},
});
const TaskModel = mongoose.model("task", taskSchema);
export default TaskModel;
