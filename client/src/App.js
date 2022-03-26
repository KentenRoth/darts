import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/sidebar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Sidebar />
			</BrowserRouter>
		</>
	);
}

export default App;
