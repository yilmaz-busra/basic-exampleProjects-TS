import React from "react";
import { todoType } from "./apptypes";

type PropsType = {
  task: todoType;
  //deleteTask fonksiyonunu props olarak alıyoruz. Void dönüş tipi olacak çünkü bir şey döndürmeyecek.
  deleteTask: (nameToDelete: string) => void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="card">
      <div className="">
        <p>Task :{task.taskName}</p>
        <p>How many days is this task? :{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
