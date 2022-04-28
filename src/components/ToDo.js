import React from "react";
import deleteicon from "../img/garbage-can.png";


const ToDo = (props) => {
	const {todo, deleteItem}=props;
	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
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