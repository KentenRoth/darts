import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Sidebar from './Components/sidebar';
import Gameboard from './Components/gameboard';

function App() {
	return (
		<>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Gameboard />} exact />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
