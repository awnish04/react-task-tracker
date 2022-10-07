import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="py-5 ml-10 mr-10 text-grya-500 text-xl font-medium justify-between  ">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
