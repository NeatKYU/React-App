import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
	
	const VideoItemList = videos.map((video) => {
		return (
			<VideoItem 
				key={video.id.videoId}
				video={video} 
				onVideoSelect={onVideoSelect}
			/>
		);
	});

	return <div className="ui relaxed divided list">{VideoItemList}</div>

}

export default VideoList;