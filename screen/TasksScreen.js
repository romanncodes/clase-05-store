
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect, useState, useEffect } from "react";
import IconButton from "../components/IconButton";
import NewTask from "../components/NewTask";
import { TaskContext } from "../store/task-context";
import TaskItem from "../components/TaskItem";
import { getTasks } from "../http";


function TasksScreen(){
    const taskCTX = useContext(TaskContext);
    const [isError, setError]=useState(false);
    const navigator = useNavigation();

    const [showModal, setShowModal]=useState(false)


    function activeModal(){
        setShowModal(true)
    }

    function hideModal(){
        setShowModal(false)
    }


    useLayoutEffect(()=>{
        navigator.setOptions({
            headerRight:()=><IconButton 
                                name='add' 
                                color='#000000'
                                onPress={activeModal}/>
        })
    },[])

    useEffect( ()=>{
        async function getTareas(){
            try{
                const tasks = await getTasks()
                taskCTX.modifyTasks(tasks)
                setError(false)
            }catch(error){
                setError(true)
            }
        }

        getTareas();
    } , [])
    

    function renderTask(obj){
        return <TaskItem id={obj.item.id} name={obj.item.name} date={obj.item.date.toString()}/>
    }

    return (
        <View>
            <NewTask showModal={showModal} hideModal={hideModal} />
            
            {
                isError?
                <Text>
                    Problemas al conectar con la API
                </Text>
                :
                <FlatList
                data={taskCTX.tasks}
                renderItem={renderTask}
                keyExtractor={(item)=>item.id}
                />
            }
            
            

        </View>
    )
}

export default TasksScreen;