import React from 'react';
import X01 from './Games/x01';

class Gameboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="gameboard">
				<X01 />
			</div>
		);
	}
}

export default Gameboard;
