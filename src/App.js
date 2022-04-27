import React  from "react";
import "./tailwind.css";
import { Route, Routes, HashRouter } from "react-router-dom";
//components
import Homepage from "./components/HomePage";
import ListPage from "./components/ListPage";


const App = () => {
	
	return (
		<React.Fragment>
			<HashRouter>
				<Routes>
					<Route path= "/"  element = { <Homepage /> }/>
					<Route path="/listpage" element = { <ListPage/> }/>
				</Routes>
			</HashRouter>
		</React.Fragment>
	);
};

export default App;