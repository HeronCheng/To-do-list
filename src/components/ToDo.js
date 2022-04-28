import React from "react";
import deleteicon from "../img/garbage-can.png";
import {database, ref,remove}  from "../firebaseConfig";

const ToDo = (props) => {
	const {todo}=props;
	
	const deleteItem = (id) => {
		console.log(id)
		const handleDeleteRef=ref(database,"/");
		remove(handleDeleteRef,id);
	};
	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		console.log(e.currentTarget.parentNode.id)
		deleteItem(e.currentTarget.parentNode.id);
	};


	return (
		<React.Fragment >
			<div className={todo.complete ? "hidden" : "flex items-center justify-center"}>
				{todo.task}
				<button className="p-4" onClick={handleDelete}><img src={deleteicon} className="w-8"/></button>
			</div>
			
		</React.Fragment>
	);
};

export default ToDo;     