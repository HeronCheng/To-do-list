import React from "react";
import ToDo from "./ToDo";


const List = ({toDoList,setToDoList}) => {

	// let toDoValue=toDoList.map(item => item.task);
	
	
	
	return (
		<React.Fragment >
			{toDoList.map(todo => {
				return (
					<>
					<ToDo todo={todo}  key={Math.random()} />
					<div className="border-solid border-slate-200 border-b-2 w-1/3 mx-auto"></div>
					</>
				);
			}
			)}
		</React.Fragment>
	);
};

export default List;