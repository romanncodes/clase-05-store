import axios from 'axios'


const URL=''

export function saveTask(task){
    axios.post( URL+"/tareas.json" ,task);
}
export function removeTask(id){
   // axios.delete( URL+"/tareas/"+id+".json");
    axios.delete( `${URL}/tareas/${id}.json` );
}
export function updateTask(id, task){
    //axios.put( URL+"/tareas/"+id+".json" ,task);
    axios.put( `${URL}/tareas/${id}.json` , task);
}

export async function getTasks(){
    const response = await axios.get(`${URL}/tareas.json`)

    const tareas = []

    for(const key in response.data){
        const obj={
            id: key,
            name: response.data[key].name,
            date: Date(response.data[key].date)
        }
        tareas.push(obj)

    }
    return tareas;

}