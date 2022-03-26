import React from 'react';

class X01 extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('Mounted');
	}

	render() {
		return (
			<div>
				<h1>x01</h1>
			</div>
		);
	}
}

export default X01;
