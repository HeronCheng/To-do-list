import React from "react";
import ToDo from "./ToDo";


const List = ({toDoList,setToDoList}) => {
	console.log(toDoList);
	let toDoValue=toDoList.map(item => item.task);
	console.log(toDoValue);
	
	const deleteItem = (id) => {
		// gets id of the button triggered
		const index = toDoList.map(todo => todo.id).indexOf(Number(id));
		// finds index of that id
    
		const updatedList = [...toDoList];
		// splices array .splice(index, 1)
		updatedList.splice(index, 1);
        
		setToDoList(updatedList);
	
	};
	
	


	return (
		<React.Fragment >
			{toDoListArr.map(todo => {
				return (
					<>
					<ToDo todo={todo} deleteItem={deleteItem} key={Math.random()} />
					<div className="border-solid border-slate-200 border-b-2 w-1/3 mx-auto"></div>
					</>
				);
			}
			)}
		</React.Fragment>
	);
};

export default List;