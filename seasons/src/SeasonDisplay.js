import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text: 'Let\'s hit the beach!',
		icon: 'sun'
	},
	winter: {
		text: 'Burr, it is chilly!',
		icon: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	console.log(lat, month);
	if(month >2 && month < 9){
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}

const SeasonDisplay = props => {
	const m = new Date();
	const season = getSeason(props.lat, m.getMonth());
	const {text, icon} = seasonConfig[season];

	return (
		<div className={season}>
			<i className={`icon-left massive ${icon} icon`}></i>
			<h1 className='season-display'>{text}</h1>
			<i className={`icon-right massive ${icon} icon`}></i>
		</div>
	);
};

export default SeasonDisplay;