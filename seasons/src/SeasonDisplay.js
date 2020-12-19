import react from 'react';
import "./SeasonDisplay.css";

const SeasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		iconName: "sun"
	},
	winter: {
		text: "Burr it is cold!",
		iconName: "snowflake"
	}
}

const getSeason = (lat, month) => {
	console.log(month);
	if(month > 3 && month < 10) {
		//북반구일 경우 위도가 0보다 크니까 + 남반구일 경우 -
		return lat > 0 ? 'summer' : 'winter'
	} else{
		return lat > 0 ? 'winter' : 'summer'
	}
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, (new Date().getMonth()+1))
	const { text, iconName } = SeasonConfig[season]

	return(
		<div className={`season-display ${season}`}>
		<i className={`icon-left massive ${iconName} icon`}/>
			<h1>{text}</h1>
		<i className={`icon-right massive ${iconName} icon`}/>
		</div>
	)
}

export default SeasonDisplay;