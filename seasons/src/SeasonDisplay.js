import react from 'react';

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
	const view = season === 'summer' ? '따뜻하다' : '춥다';
	const icon = season === 'winter' ? 'snowflake' : 'sun';
	return(
		<div>
		<i className={`${icon} icon`}/>
			<h1>{view}</h1>
		<i className={`${icon} icon`}/>
		</div>
	)
}

export default SeasonDisplay;