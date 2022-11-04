import {useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext";

function TaskForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle("")
        setDescription("")
    };

    return(
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Create a new Task</h1>
                <input placeholder="Write your task"    
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                    autoFocus
            />
            <textarea placeholder="Write its description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                autoFocus
            />
            <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Save</button>
        </form>
       </div>
    );
}

export default TaskForm;
