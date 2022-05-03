import React, {useState, useEffect} from "react";

//components
import Signinup from "../firebaseConfig";

const Homepage=() => {
	const [ toSignInUp, setToSignInUp ] = useState(false);
	const [ userStatus, setUserStatus] = useState(false);

	useEffect(()=>{
		if(localStorage.getItem("userStatus") !== null){
			setUserStatus(true);
		}
		else{
			setUserStatus(false);
		}
		},[userStatus])
		
	const goSignInUp=()=>{
		setToSignInUp(!toSignInUp);
		return toSignInUp;
	}
	
	function check(){
		if( userStatus === true ){
			window.location.href='/listpage'
		}
		else{
			goSignInUp()
		}
	}
	
	return (
		<React.Fragment>
			<div className="font-mono">
				<div className="text-center text-5xl m-4">Organize Yourself</div>
				<hr></hr>
				<div className="text-center my-7 text-2xl">List what you want to do...</div>
				<div className="text-center  mx-auto my-7 p-2 text-2xl font-semibold">從今天開始，規畫你的每一步吧</div>
				<div className="text-center border-solid rounded-3xl border w-64 mx-auto my-7 p-2 bg-slate-300 font-semibold text-gray-800 cursor-pointer" onClick={check} >登入，讓我們幫你記得每一步</div>
				{toSignInUp? <Signinup/> : ""}
			</div>
		</React.Fragment>
	);
};


export default Homepage;