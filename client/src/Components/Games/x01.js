import React from 'react';
import PlayerBlock from '../playerBlock';

class X01 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			addedPlayers: ['Kent', 'Kent 2', 'Kent 3', 'Kent 4'],
		};
	}

	componentDidMount() {
		console.log('Mounted x01');
	}

	render() {
		return (
			<>
				<div className="playersBlock">
					{this.state.addedPlayers.map((player) => {
						return <PlayerBlock player={player} />;
					})}
				</div>
			</>
		);
	}
}

export default X01;
