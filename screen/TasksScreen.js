
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import NewTask from "../components/NewTask";
import { TaskContext } from "../store/task-context";
import TaskItem from "../components/TaskItem";


function TasksScreen(){
    const taskCTX = useContext(TaskContext);
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

    

    function renderTask(obj){
        return <TaskItem id={obj.item.id} name={obj.item.name} date={obj.item.date.toString()}/>
    }

    return (
        <View>
            <NewTask showModal={showModal} hideModal={hideModal} />
            <FlatList
                data={taskCTX.tasks}
                renderItem={renderTask}
                keyExtractor={(item)=>item.id}
                />

        </View>
    )
}

export default TasksScreen;