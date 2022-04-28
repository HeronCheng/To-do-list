import React from "react";
import deleteicon from "../img/garbage-can.png";
import {database, ref,remove}  from "../firebaseConfig";

const ToDo = (props) => {
	const {todo}=props;
	
	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		console.log(e.currentTarget)

		const handleDeleteRef=ref(database,"/");
		remove(handleDeleteRef,e.currentTarget);
	};


	return (
		<React.Fragment >
			<form onSubmit={handleDelete}>
			<div className={todo.complete ? "hidden" : "flex items-center justify-center"}>
				{todo.task}
				<button className="p-4" id="todo.id"><img src={deleteicon} className="w-8"/></button>
			</div>
			</form>
		</React.Fragment>
	);
};

export default ToDo;     