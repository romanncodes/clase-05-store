
import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TaskContext } from "../store/task-context";
import { removeTask, updateTask } from "../http";

function TaskEditScreen(){
    const taskCTX = useContext(TaskContext)
    const route = useRoute()
    const navigator = useNavigation();
    const id = route.params.id;

    const task = taskCTX.tasks.find(item=>item.id === id)
    
    const [name, setName] = useState(task?.name)

    function editTask(){
        task.name = name
        taskCTX.editTask(id, task)
        updateTask(id, task)
        navigator.navigate('Task')
    }
    function deleteTask(){
        taskCTX.deleteTask(id);
        removeTask(id)
        navigator.goBack()
    }
    
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(text)=>{setName(text)}} style={styles.input} value={name}/>
            <View style={styles.buttonContainer}>
                <Button title='Edit' onPress={editTask} />
                <Button title='Delete' color={'red'} onPress={deleteTask}/>
            </View>
        </View>
    )
}

export default TaskEditScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        margin:16,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:16
    },
    input:{
        padding:8,
        borderWidth:1,
        borderColor:'#ccc',
        width:'100%',
        marginVertical:8
    },
})