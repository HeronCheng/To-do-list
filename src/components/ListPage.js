import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

//components
import List from "./List";
import AddForm from "./AddForm";
import {database, ref, onValue,update}  from "../firebaseConfig";


const ListPage = () => {
	const [ toDoList, setToDoList ] = useState([]);
	let toDoListArr=ref(database, "/");
	useEffect(()=>{
		onValue(toDoListArr, (snapshot) => {
			let predata =snapshot.val();
			if(predata===null){
				setToDoList(toDoList);
			}
			else{
				let data=Object.values(predata)
				setToDoList(toDoList.concat(data));
			}
		});
	},[])
	
	

	const addTask = ( userInput ) => {
		let realId=uuidv4()
		let newData={
			id: realId ,
			task: userInput, 
			complete:false
		}
		const addTaskRef=ref(database,"/"+realId);
		update(addTaskRef,newData);
		
		let copy = [...toDoList];
		copy = [...copy, newData];
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