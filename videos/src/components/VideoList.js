import react from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
	
	const VideoItemList = videos.map((video) => {
		return (
			<VideoItem 
				video={video} 
			/>
		);
	});

	return <div className="ui relaxed divided list">{VideoItemList}</div>

}

export default VideoList;