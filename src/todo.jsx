
export default  function Todo({task}){
    return(
        <li>Task: {task}</li>
       
        
)
}

    //    conditional rendering option 1
// export default  function Todo({task, isDone}){
//     if(isDone === true){
//         return <li> finiche All:{task}</li>
//     }
//     else{
//         return <li>work all {task}</li>
//     }
//     }

//    conditional rendering option 2
//export default  function Todo({task, isDone}){
//     if(isDone){
//         return <li> finiche All:{task}</li>
//     }
//     return <li>work all {task}</li>

//     } 

    //    conditional rendering option 3
// export default  function Todo({task, isDone}){
//    return(
//     <li>{isDone ?  'Finesd': 'work on'}: {task}</li>
//    )
//     }


 //    conditional rendering option 4

 
// export default  function Todo({task, isDone}){
//     return(
//      <li>{task} {isDone || ':do it'}</li>
       
        
// )
// }


//    conditional rendering option 6
// export default  function Todo({task, isDone}){
//     let  listitem;
//    if(isDone){
//        listitem = <li> finiche All:{task}</li>
//     }
//     else{
//         listitem = <li>work all: {task}</li>
//     }
//     return listitem;

//     }