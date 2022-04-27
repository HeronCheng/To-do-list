import React, {useState} from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
//components
import List from "./List";
import AddForm from "./AddForm";



const ListPage = () => {
	const [ toDoList, setToDoList ] = useState(data);
	const addTask = ( userInput ) => {
		let copy = [...toDoList];
		copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
		setToDoList(copy);
	};
	
	return (
		<React.Fragment >
			<div className="font-mono">
				<div className="text-center text-5xl m-4">Organize Yourself</div>
				<hr></hr>
				<div className="text-center m-6">
					<AddForm addTask={addTask}></AddForm>
					<List toDoList={toDoList} setToDoList={setToDoList}></List>
				</div>
				<div className="text-center border-solid rounded-3xl border w-24 mx-auto my-7 p-2 bg-slate-300 font-semibold text-gray-800"><Link to="/">回到首頁</Link></div>
			</div>
		</React.Fragment>
	);
};




export default ListPage;