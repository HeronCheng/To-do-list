import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import List from "./List";
import AddForm from "./AddForm";
import {database, ref, push, onValue}  from "../firebaseConfig";


const ListPage = () => {
	let data;
	const [ toDoList, setToDoList ] = useState([]);
	let toDoListArr= ref(database, "/");
	onValue(toDoListArr, (snapshot) => {
		data = snapshot.val();

		setToDoList(data);
		console.log(toDoList)
	});
	console.log(toDoList)
	const addTask = ( userInput ) => {
		let newData={
			id: toDoList.length + 1,
			task: userInput, 
		}
		const addTaskRef=ref(database,"/");
		push(addTaskRef,newData);
		
		let copy = [...toDoList];
		copy = [...copy, { id: toDoList.length + 1, task: userInput }];
		setToDoList(copy);
	}
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