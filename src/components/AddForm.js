import React,{useState} from "react";

const AddForm = ({ addTask }) => {
	const [ userInput, setUserInput ] = useState("");

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(userInput);
		setUserInput("");
	};
	return (
		<React.Fragment >
			<form onSubmit={handleSubmit}>
				<input value={userInput} type="text" onChange={handleChange} placeholder="Enter your task..." className="border-solid border-2 rounded-3xl border-slate-500 p-2 pl-4"/>
				<button className="m-2">Submit</button>
			</form>
		</React.Fragment>
	);
};

export default AddForm;