import React from "react";
import { Link } from "react-router-dom";

const Homepage=() => {
	return (
		<React.Fragment>
			<div className="font-mono">
				<div className="text-center text-5xl m-4">Organize Yourself</div>
				<hr></hr>
				<div className="text-center my-7 text-2xl">List what you want to do...</div>
				<div className="text-center border-solid rounded-3xl border w-64 mx-auto my-7 p-2 bg-slate-300 font-semibold text-gray-800"><Link to="/listpage">從今天開始，規畫你的每一步吧</Link></div>
			</div>
		</React.Fragment>
	);
};



export default Homepage;