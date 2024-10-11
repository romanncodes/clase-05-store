
import { View, Text, Button, Modal, TextInput, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import { useContext, useState } from "react";
import { TaskContext } from "../store/task-context";



function NewTask(props){
    const taskCTX = useContext(TaskContext);
    const [name, setName] = useState('')
    
    function addTask(){
        taskCTX.addTask({
            id:name,
            name:name,
            date:Date()

        })
        props.hideModal()
    }

    return (
        <Modal visible={props.showModal} animationType="slide" >
            <View style={styles.container}>
                <View style={styles.close} >
                <IconButton name='close' color='#000' onPress={props.hideModal} />
                </View>
                
                <Text>New Task</Text>

                <TextInput 
                    onChangeText={(text)=>{setName(text)}}
                    style={styles.input}
                    placeholder="task name" />

                <Button title="add task" onPress={addTask} />
            </View>

        </Modal>
    )

}

export default NewTask
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:16,
    },
    input:{
        padding:8,
        borderWidth:1,
        borderColor:'#ccc',
        width:'100%',
        marginVertical:8
    },
    close:{
        position:'absolute',
        top:50,
        right:0
    }
})