import AddTaskForm from './addTaskForm'
import AddTaskLiveOutPut from './AddTaskLiveOutPut';
import AddTaskContextProvider from './contextStore/AddTaskContextProvider';
const AddTask = () => {
    var taskDetails = {};

    const AddTaskFormHandeler = (data) => {

        return data;

    }


    return ( <div >
        <h1 >
        this is addd task page <div style = {
            { width: '400px', margin: 'auto' } } >

        { /* <AddTaskContextProvider> */ } <
        AddTaskForm AddTaskFormHandeler = { AddTaskFormHandeler }/> { /* </AddTaskContextProvider> */ } </div> <div style = {
            { width: '600px', margin: 'auto' } } >

        { /* <AddTaskContextProvider> */ } <        AddTaskLiveOutPut taskDetails = { taskDetails }/>
         { /* </AddTaskContextProvider> */ } </div>


        </h1> </div>
    )
}
export default AddTask;
