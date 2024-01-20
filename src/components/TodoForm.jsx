import { useState } from "react";
import { useTodo } from "../context/index";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        className="border-black border-solid border-2"
        placeholder="Add Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-400 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
