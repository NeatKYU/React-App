// lib
import react, {useState, useEffect} from 'react';

// components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// api
import youtube from '../apis/youtube';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onTextSubmit('박보영');
	}, []);

	const onTextSubmit = async (serachText) => {
		const response = await youtube.get('/search', {
			params: {
				q: serachText
			}
		})
		setVideos(response.data.items)
		setSelectedVideo(response.data.items[0])
	}

	const onVideoSelect = (video) => {
		setSelectedVideo(video)
	}

	return (
		<div className="ui container">
			<SearchBar handleSubmit={onTextSubmit}/>
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail 
							video={selectedVideo}
						></VideoDetail>
					</div>
					<div className="five wide column">
						<VideoList 
							videos={videos} 
							onVideoSelect={onVideoSelect}
						></VideoList>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;