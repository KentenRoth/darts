import React from 'react';

class Gameboard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('Mounted');
	}

	render() {
		return (
			<div>
				<h1>Gameboard</h1>
			</div>
		);
	}
}

export default Gameboard;
