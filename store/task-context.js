import { createContext, useState } from "react";

export const TaskContext = createContext({
    tasks:[],
    addTask:(task)=>{},
    editTask:(id, task)=>{},
    deleteTask:(id)=>{},
    modifyTasks:(list)=>{ }

})


function TaskContextProvider({children}){

    const [tasks, setTasks] = useState([])

    function addTask(task){
        setTasks([...tasks, task])
    }

    function deleteTask(id){
        setTasks(tasks.filter((item)=>item.id!==id));
    }

    function editTask(id, task){
        const t = tasks.find((item)=>item.id===id);
        
        setTasks(tasks.map(item=>{
            if(item.id === t.id){
                item.name = task.name
            }
            return item
        }))
    }

    function modifyTasks(list){
        setTasks(list)
    }

    const value = {
        tasks:tasks,
        addTask:addTask,
        deleteTask:deleteTask,
        editTask:editTask,
        modifyTasks:modifyTasks
    }

    return <TaskContext.Provider value={value}>
        {children}
    </TaskContext.Provider>
}

export default TaskContextProvider;