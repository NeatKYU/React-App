import react from 'react';
import axios from 'axios';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';

class App extends react.Component{

	state = { images: [] };

	/* 화살표 함수 인수에 http요청일 때 async붙이기  */
	onSearchSubmit = async (term) => {
		
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term
			},
		})
		// 비동기 async를 사용하기전 이렇게 콜백함수로 받아와서 순서를 보장받아야함
		// async await를 사용하면 이런거 할 필요 없음
		//.then((response) => console.log(response.data.results))

		this.setState({ images: response.data.results })
		//console.log(response.data.results);
	}

	render(){
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Found: {this.state.images.length} images
			</div>
		)
	}
}

export default App;