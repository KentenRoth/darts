import React from 'react';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}

	// TODO:
	// Props:
	// Current User Name
	// Current User Stats
	// Friends List
	// Function to send added friend to parent

	// Input status data
	// Map over friends
	// Add friend to game board

	render() {
		return (
			<aside className="sideBar">
				<div className="sideBar_heading">
					<h1>Kent</h1>
				</div>
				<div className="sideBar_stats">
					<h2 className="sideBar_stats__title">Stats</h2>
					<ul>
						<li>Highest Score: 151</li>
						<li>Highest Out: 94</li>
						<li>10 Match AVG: 47.33</li>
					</ul>
				</div>
				<div className="sideBar_friends">
					<h2 className="sideBar_friends__title">Friends</h2>
					<ul>
						<li>
							Friend One <button>+</button>
						</li>
						<li>
							Friend Two <button>+</button>
						</li>
						<li>
							Friend Three <button>+</button>
						</li>
						<li>
							Friend Four <button>+</button>
						</li>
						<li>
							Friend Five <button>+</button>
						</li>
					</ul>
				</div>
			</aside>
		);
	}
}

export default Sidebar;
