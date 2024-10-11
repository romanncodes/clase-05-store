import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native"

function TaskItem(props){

    const navigator = useNavigation();

    function goToEdit(){
        navigator.navigate('Edit',{id:props.id})
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={goToEdit}>
                <View>
                    <Text style={styles.text}>{props.name}</Text>
                    <Text style={styles.text}>{props.date}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default TaskItem;

const styles = StyleSheet.create({
    container:{
        marginVertical:4,
        marginHorizontal:16,
        backgroundColor:'#768d9f',
        padding:8,
        borderRadius:8
    },
    text:{
        color:'#fff'
    }
});