import React from "react";
import ToDo from "./ToDo";
import {database, ref,remove}  from "../firebaseConfig";

const List = ({toDoList,setToDoList}) => {

	let toDoValue=toDoList.map(item => item.task);

	const deleteItem = (id) => {
		console.log(id)
		const handleDeleteRef=ref(database,"/");
		remove(handleDeleteRef,id);
	};
	
	return (
		<React.Fragment >
			{toDoList.map(todo => {
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