import React from 'react';
import ScoreHistory from './scoreHistory';

class PlayerBlock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scoreHistory: [],
			startingScore: this.props.game,
			currentScore: this.props.player.score,
			dartOne: 0,
			dartTwo: 0,
			dartThree: 0,
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.game !== prevProps.game) {
			this.setState({
				startingScore: this.props.game,
				currentScore: this.props.game,
			});
		}
	}

	handleFocus = (e) => {
		e.target.select();
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: parseInt(e.target.value),
		});
	};

	playerBusted = () => {};
	submitScore = () => {
		let num = this.props.num;
		let dartOne = parseInt(this.state.dartOne);
		let dartTwo = parseInt(this.state.dartTwo);
		let dartThree = parseInt(this.state.dartThree);
		let roundScore = dartOne + dartTwo + dartThree;

		if (roundScore > this.state.currentScore) {
			return this.playerBusted();
		}

		this.setState(
			{
				scoreHistory: [...this.state.scoreHistory, roundScore],
				dartOne: '',
				dartTwo: '',
				dartThree: '',
			},
			() => {
				this.props.updateScore(num, roundScore);
			}
		);
	};

	scoreUpdate = (e) => {
		let newScore = this.state.currentScore - parseInt(e.target.value);
		console.log(newScore);
		this.setState({
			currentScore: newScore,
		});
	};

	setAverage = () => {
		console.log('setAverage');
		if (this.state.scoreHistory.length === 0) {
			return 0;
		}
		return (
			this.state.scoreHistory.reduce((a, b) => a + b) /
			this.state.scoreHistory.length
		);
	};

	render() {
		return (
			<div className="player">
				<div className="player_title">
					<h1>{this.props.player.name}</h1>
				</div>
				<div className="player_score">{this.state.currentScore}</div>
				<div className="player_inputs">
					<input
						id="dartOne"
						name="dartOne"
						type="number"
						min="0"
						onBlur={this.scoreUpdate}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						value={this.state.dartOne}
					/>
					<input
						id="dartTwo"
						name="dartTwo"
						type="number"
						min="0"
						onBlur={this.scoreUpdate}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						value={this.state.dartTwo}
					/>
					<input
						id="dartThree"
						name="dartThree"
						type="number"
						min="0"
						onBlur={this.scoreUpdate}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						value={this.state.dartThree}
					/>
				</div>
				<div className="player_submit">
					<button onClick={this.submitScore}>End Turn</button>
				</div>
				<div className="player_scoringAvg">
					Set Average: {this.setAverage()}
				</div>
				<div className="player_history">
					<ScoreHistory history={this.state.scoreHistory} />
				</div>
			</div>
		);
	}
}

export default PlayerBlock;
