import react from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends react.Component {

	onTextSubmit = (serachText) => {
		youtube.get('/search', {
			params: {
				q: serachText
			}
		})
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar handleSubmit={this.onTextSubmit}/>
			</div>
		)
	}
}

export default App;