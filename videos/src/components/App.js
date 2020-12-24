// lib
import react from 'react';

// components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// api
import youtube from '../apis/youtube';

class App extends react.Component {

	state = { videos: [], selectedVideo: null };

	componentDidMount(){
		// 맨처음 시작할 때 검색될 내용
		this.onTextSubmit('맛있는 녀석들');
	}

	onTextSubmit = async (serachText) => {
		const response = await youtube.get('/search', {
			params: {
				q: serachText
			}
		})
		// selectedVideo에 응답의 처음 값을 준다.
		this.setState({ 
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		})
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar handleSubmit={this.onTextSubmit}/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail 
								video={this.state.selectedVideo}
							></VideoDetail>
						</div>
						<div className="five wide column">
							<VideoList 
								videos={this.state.videos} 
								onVideoSelect={this.onVideoSelect}
							></VideoList>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;