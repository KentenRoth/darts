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
			activeThrower: false,
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.game !== prevProps.game) {
			this.setState({
				startingScore: this.props.game,
				currentScore: this.props.game,
			});
		}
		if (this.props.player.thrower !== prevProps.player.thrower) {
			this.setState({
				activeThrower: !this.state.activeThrower,
			});
		}
	}

	handleFocus = (e) => {
		e.target.select();
		if (this.state[e.target.name] !== 0) {
			this.setState({
				currentScore:
					parseInt(this.state.currentScore) +
					parseInt(e.target.value),
			});
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: parseInt(e.target.value),
		});
	};

	playerBusted = () => {
		let num = this.props.num;
		return this.setState(
			{
				currentScore: this.props.player.score,
				scoreHistory: [...this.state.scoreHistory, 0],
				dartOne: 0,
				dartTwo: 0,
				dartThree: 0,
			},
			() => this.props.updateScore(num, 0)
		);
	};

	submitScore = () => {
		let num = this.props.num;
		let { dartOne, dartTwo, dartThree } = this.state;
		let roundScore =
			parseInt(dartOne) + parseInt(dartTwo) + parseInt(dartThree);
		if (roundScore > parseInt(this.props.player.score)) {
			return this.playerBusted();
		}

		this.setState(
			{
				scoreHistory: [...this.state.scoreHistory, roundScore],
				dartOne: 0,
				dartTwo: 0,
				dartThree: 0,
			},
			() => {
				console.log('running');
				this.props.updateScore(num, roundScore);
			}
		);
	};

	scoreUpdate = (e) => {
		let newScore = this.state.currentScore - this.state[e.target.name];

		this.setState({
			currentScore: newScore,
		});
	};

	setAverage = () => {
		if (this.state.scoreHistory.length === 0) {
			return 0;
		}
		return (
			this.state.scoreHistory.reduce((a, b) => a + b) /
			this.state.scoreHistory.length
		);
	};

	render() {
		let { thrower } = this.props.player;
		console.log(this.props);
		return (
			<div className={`player ${thrower ? 'active' : null}`}>
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
					<button
						onClick={this.submitScore}
						disabled={thrower ? false : true}
					>
						End Turn
					</button>
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
