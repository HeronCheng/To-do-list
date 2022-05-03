import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

//components
import List from "./List";
import AddForm from "./AddForm";
import {db, doc, getDocs, collection, setDoc, SignOut, auth}  from "../firebaseConfig";


const ListPage = () => {

	const childRef = useRef(null); 


	const user = auth.currentUser;
	console.log(user)
	const [userData, setUserData] = useState ("");
	
	useEffect(()=>{
		if (user !== null) {
			setUserData(user.uid)
		}
	  },[user])


	const [ toDoList, setToDoList ] = useState([]);

	//抓資料庫中的資料
	useEffect(()=>{
		let docSnap;
		async function fetchData(){
			docSnap = await getDocs(collection(db, "todo: "+userData));
			return docSnap;
		}

		let list=[];

		fetchData().then(result=>{			
			if(result!==null){		
				result.forEach((doc) => {
					list.push(doc.data())
					});
		setToDoList(toDoList.concat(list));
		}})
		.catch(setToDoList(toDoList))

	},[userData])

	

	//添加代辦事項
	const addTask = async( userInput ) => {
		const userUid = childRef.current.getFromData()
		console.log(userUid);

		let realId=uuidv4();
		let newData={
			id: realId,
			task: userInput, 
			complete: false
		}

		try{
			await setDoc(doc(db, "todo: "+userUid, realId), newData);
			console.log("Document written with ID: ", realId);
		}
		catch (e) {
			console.error("Error adding document: ", e);
			}

		let copy = [...toDoList];
		copy = [...copy, newData];
		setToDoList(copy);
	}

	return (
		<React.Fragment >
			<div className="font-mono" >
				<div className="text-center text-5xl m-4"><Link to="/">Organize Yourself</Link></div>
				<SignOut ref={ childRef } />
				<hr></hr>
				<div className="text-center m-6 relative">
					<AddForm addTask={addTask}></AddForm>
					<List toDoList={toDoList} setToDoList={setToDoList} ></List>
				</div>
			</div>
		</React.Fragment>
	);
	};


export default ListPage;