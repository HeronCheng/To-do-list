import React, { useState, useEffect } from "react";
import deleteicon from "../img/garbage-can.png";
import { db, deleteDoc, doc, auth }  from "../firebaseConfig";

const ToDo = (props) => {
	const {todo,toDoList,setToDoList}=props;

	const user = auth.currentUser;
	const [userData, setUserData] = useState ("");
	
	useEffect(()=>{
		if (user !== null) {
			setUserData(user.uid)
		}
	  },[user])

	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();

		todo.complete=true;
		let filtered = toDoList.filter(task => {
			return !task.complete;
		});

		async function deleteData(){
			await deleteDoc(doc(db, "todo: "+userData, todo.id));
		}

		deleteData()
		.then(result=>console.log("success"))
		.catch(result=>console.log("fail"));

		setToDoList(filtered);
		
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