import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
  return (
    <div className=" bg-slate-200 mb-5 py-5 rounded-md ">
      <h3 className="ml-5 font-bold">
        {task.text}
        <FaTimes
          className="float-right mr-5 mt-4 text-red-600 cursor-pointer"
          onClick={() => onDelete (task.id)}
        />{" "}
      </h3>
      <p className="ml-5 font-medium text-zinc-600">{task.day}</p>
    </div>
  );
};

export default Task;
