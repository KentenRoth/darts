import React from 'react';
import PlayerBlock from '../playerBlock';

class X01 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			addedPlayers: ['Kent', 'Kent 2', 'Kent 3', 'Kent 4'],
			game: 301,
		};
	}

	componentDidMount() {}

	gameSelected = (e) => {
		this.setState({
			game: parseInt(e.target.value),
		});
	};

	render() {
		return (
			<div className="x01">
				<div className="x01_gameOption">
					<label>Select Your X01 Game</label>
					<select
						id="x01"
						value={this.state.game}
						onChange={this.gameSelected}
					>
						<option value="101">101</option>
						<option value="201">201</option>
						<option value="301">301</option>
						<option value="401">401</option>
						<option value="501">501</option>
						<option value="601">601</option>
						<option value="701">701</option>
						<option value="801">801</option>
						<option value="901">901</option>
						<option value="1001">1001</option>
					</select>
				</div>
				<div className="x01_title">
					<h1>Lets Play {this.state.game}</h1>
				</div>

				<div className="playersBlock">
					{this.state.addedPlayers.map((player) => {
						return <PlayerBlock player={player} />;
					})}
				</div>
			</div>
		);
	}
}

export default X01;
