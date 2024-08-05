import React, { ChangeEvent, useState } from "react";
//{FC} is a functional component olduğunu belirtir.
import "./App.css";
import { FC } from "react";
import { todoType } from "./apptypes";
import TodoItem from "./TodoItem";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);
  console.log(todoList);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      //kast etme işlemi için event.target.value'yi number'a çeviriyoruz.
      setWorkDay(Number(event.target.value));
    }
  };
  //donus tipi void olacak çünkü bir şey döndürmeyecek.
  const addNewTask = (): void => {
    //yeni bir objeye ihtiyacımız var.
    const newTask = {
      taskName: task,
      workDay: workDay,
    };
    // ...todoList mevcut todoList'i kopyalar ve yeni bir eleman ekler.
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="mainCard">
        <input
          type="text"
          value={task}
          name="task"
          onChange={handleChange}
          placeholder="What i do ?"
          className="mainCard-input"
        />
        <input
          type="number"
          value={workDay}
          name="workDay"
          onChange={handleChange}
          placeholder="
How long will this task take?"
          className="mainCard-input"
        />
        <button onClick={addNewTask} className="mainCard-button">
          Add Task
        </button>
      </div>
      <div className="toDoCard">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
