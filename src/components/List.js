import React from "react";
import ToDo from "./Todo";

const List = ({toDoList,setToDoList}) => {
	const deleteItem = (id) => {
		// gets id of the button triggered
		const index = toDoList.map(todo => todo.id).indexOf(Number(id));
		// finds index of that id
    
		const updatedList = [...toDoList];
		// splices array .splice(index, 1)
		updatedList.splice(index, 1);
        
		// sets new array as state
		setToDoList(updatedList);
	};
	return (
		<React.Fragment >
			{toDoList.map(todo => {
				return (
					<ToDo todo={todo} deleteItem={deleteItem} key={Math.random()}/>
				);
			})}
		</React.Fragment>
	);
};

export default List;