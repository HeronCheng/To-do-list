import React from "react";
import deleteicon from "../img/garbage-can.png";
import {database, ref,remove}  from "../firebaseConfig";

const ToDo = (props) => {
	const {todo,toDoList,setToDoList}=props;

	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		let filtered = toDoList.filter(task => {
			return !task.complete;
		});
		setToDoList(filtered);
		let id=e.currentTarget.id;

		const handleDeleteRef=ref(database,"/"+id);
		remove(handleDeleteRef);
	};


	return (
		<React.Fragment >
			<div  key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "hidden" : "flex items-center justify-center"}>
				{todo.task}
				<button className="p-4" onClick={handleDelete} id={todo.id}><img src={deleteicon} className="w-8"/></button>
			</div>
		</React.Fragment>
	);
};

export default ToDo;     