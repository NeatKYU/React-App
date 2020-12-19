import react from 'react';
import ReactDOM from 'react-dom';

/* const App = () => {
	//현재 위치 정보를 가져오기 위해 geoloction API 사용
	window.navigator.geolocation.getCurrentPosition(
		position => console.log(position),
		err => console.log(err)
	);

	return <div>Hello React World</div>
}; */

/* 
 *  위 코드에서 위도경도 가져오는데 걸리는 시간 문제를 해결하기위해
 *  class컴포넌트로 작성....
*/
 class App extends react.Component {
	 constructor(props){
		 super(props);

			// 직접적으로 할당할 수 있는 곳은 여기뿐!!!
			this.state = { lat: null, errorMessage: ''};
		 
	 }

	 componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// we called setState!!
				this.setState({ 
					lat: position.coords.latitude 
				});
				// we did not!! 직접접근 x
				// this.state.lat = position.coords.latitude
			},
			err => {
				//error 메시지를 상태관리 하는것은 매우 중요!!!
				this.setState({
					errorMessage: err.message
				});
			}
		);
	 }

	 componentDidUpdate() {

	 }

	 render() {
		if( this.state.errorMessage && !this.state.lat ){
			return <div>Error: {this.state.errorMessage}</div>
		}
		if( !this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat} </div>
		}
		return <div>Loading...</div>
	 }
 }

ReactDOM.render(<App/>, document.getElementById('root'));