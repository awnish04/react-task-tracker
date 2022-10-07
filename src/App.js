import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docror Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Event
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  return (
    <div className="bg-slate-500 flex flex-col justify-center h-screen w-full">
      <div className="bg-white max-h-fit w-2/5 justify-center mx-auto shadow-2xl drop-shadow-lg rounded-md">
        <Header />
        {tasks.length >0 ?(<Tasks tasks={tasks} onDelete={deleteTask} />) :  ('No Task To Show')}
      </div>
    </div>
  );
}

export default App;
