import React from 'react';

const ScoreHistory = (props) => {
	console.log(props);
	let history;
	if (props.history.length > 0) {
		history = props.history.map((score, i) => {
			return (
				<p>
					Round {i + 1}: {score}
				</p>
			);
		});
	}

	return (
		<>
			<div>
				<h1>Score History</h1>
				{history}
			</div>
		</>
	);
};

export default ScoreHistory;
