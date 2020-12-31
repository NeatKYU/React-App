// lib
import react, {useState, useEffect} from 'react';

// components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//customhooks
import useVideos from '../hooks/useVideos';

// api
//import youtube from '../apis/youtube';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('박보영');

	useEffect(() => {
		setSelectedVideo(videos[0])
	}, [videos])

	return (
		<div className="ui container">
			<SearchBar handleSubmit={search}/>
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
							// 이게 어떻게 같은거지???
							//onVideoSelect={(video) => setSelectedVideo(video)}
							onVideoSelect={setSelectedVideo}
						></VideoList>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;