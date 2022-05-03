import React from "react";
import "./tailwind.css";
import { Route, Routes, BrowserRouter} from "react-router-dom";
//components
import Homepage from "./components/HomePage";
import ListPage from "./components/ListPage";
import Auth from "./components/Auth";


const App = () => {
	
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path= "/"  element = { <Homepage /> }/>
					<Route path='/listpage' element={<Auth/>}>
						<Route path='/listpage' element={<ListPage/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default App;