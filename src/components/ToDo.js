import React from "react";
import deleteicon from "../img/garbage-can.png";
import {database, ref,remove}  from "../firebaseConfig";

const ToDo = (props) => {
	const {todo}=props;
	
	const handleFilter = () => {
		let filtered = toDoList.filter(task => {
		  return !task.complete;
		});
		setToDoList(filtered);
	  }

	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		let id=e.currentTarget.id;
		console.log(id)

		const handleDeleteRef=ref(database,"/"+id);
		remove(handleDeleteRef);
	};


	return (
		<React.Fragment >
			<form onSubmit={handleDelete} id={todo.id}>
			<div  key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "hidden" : "flex items-center justify-center"}>
				{todo.task}
				<button className="p-4" onClick={handleFilter}><img src={deleteicon} className="w-8"/></button>
			</div>
			</form>
		</React.Fragment>
	);
};

export default ToDo;     