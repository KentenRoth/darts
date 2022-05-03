import React from 'react';
import PlayerBlock from '../playerBlock';

class X01 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			addedPlayers: [
				{ name: 'Kent', score: 301, thrower: true },
				{ name: 'Kent 2', score: 301, thrower: false },
			],
			game: 301,
			count: 0,
		};
	}

	gameSelected = (e) => {
		let newGameScore = this.state.addedPlayers;
		newGameScore.map((player) => {
			return (player.score = parseInt(e.target.value));
		});
		this.setState({
			game: parseInt(e.target.value),
			addedPlayers: newGameScore,
		});
	};

	updateScore = (i, score) => {
		let updatedPlayer = this.state.addedPlayers.map((player, index) => {
			if (index === i) {
				player.score = player.score - score;
			}
			return player;
		});
		this.updateThrower(i);
		this.setState({
			addedPlayers: updatedPlayer,
		});
	};

	updateThrower = (i) => {
		this.state.addedPlayers.map((player, index) => {
			if (i === index || i + 1 === index) {
				player.thrower = !player.thrower;
			}
			if (i + 1 === this.state.addedPlayers.length) {
				if (index === 0) {
					player.thrower = !player.thrower;
				}
			}
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
					{this.state.addedPlayers.map((player, index) => {
						return (
							<PlayerBlock
								player={player}
								num={index}
								updateScore={this.updateScore}
								game={this.state.game}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default X01;
