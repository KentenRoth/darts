import React from 'react';

const PlayerBlock = (props) => {
	return (
		<div className="player">
			<h1>{props.player}</h1>
		</div>
	);
};

export default PlayerBlock;
