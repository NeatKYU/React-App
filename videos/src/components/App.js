// lib
import react from 'react';

// components
import SearchBar from './SearchBar';
import VideoList from './VideoList';

// api
import youtube from '../apis/youtube';

class App extends react.Component {

	state = { videos: [] };

	onTextSubmit = async (serachText) => {
		const response = await youtube.get('/search', {
			params: {
				q: serachText
			}
		})
		this.setState({ videos: response.data.items })
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar handleSubmit={this.onTextSubmit}/>
				<VideoList videos={this.state.videos}></VideoList>
			</div>
		)
	}
}

export default App;