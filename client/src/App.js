import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Sidebars
import Sidebar from './Components/Sidebars/sidebar';
import Gamebar from './Components/Sidebars/gamebar';

// Components
import Gameboard from './Components/gameboard';

function App() {
	return (
		<>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Gameboard />} exact />
				</Routes>
				<Gamebar />
			</BrowserRouter>
		</>
	);
}

export default App;
