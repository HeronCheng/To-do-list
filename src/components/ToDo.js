import React from "react";
import deleteicon from "../img/garbage-can.png";
import {database, ref,remove}  from "../firebaseConfig";

const ToDo = (props) => {
	const {todo}=props;
	
	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		let id=e.currentTarget.childNodes.value;
		console.log(id)

		const handleDeleteRef=ref(database,"/"+id);
		remove(handleDeleteRef);
	};


	return (
		<React.Fragment >
			<form onSubmit={handleDelete}>
			<div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "hidden" : "flex items-center justify-center"}>
				{todo.task}
				<button className="p-4" id="todo.id"><img src={deleteicon} className="w-8"/></button>
			</div>
			</form>
		</React.Fragment>
	);
};

export default ToDo;     