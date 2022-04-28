import React from "react";
import ToDo from "./ToDo";
import {database, ref, onValue}  from "../firebaseConfig";

const List = ({toDoList,setToDoList}) => {
	const deleteItem = (id) => {
		// gets id of the button triggered
		const index = toDoList.map(todo => todo.id).indexOf(Number(id));
		// finds index of that id
    
		const updatedList = [...toDoList];
		// splices array .splice(index, 1)
		updatedList.splice(index, 1);
        

		setToDoList(updatedList);
	
};
	const starCountRef = ref(database, "/");
		onValue(starCountRef, (snapshot) => {
		const data = snapshot.val();
		setToDoList(data);
	});

	return (
		<React.Fragment >
			{toDoList.map(todo => {
				return (
					<>
					<ToDo todo={todo} deleteItem={deleteItem} key={Math.random()} />
					<div className="border-solid border-slate-200 border-b-2 w-1/3 mx-auto"></div>
					</>
				);
			})}
		</React.Fragment>
	);
};

export default List;