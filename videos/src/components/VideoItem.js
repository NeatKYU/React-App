import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

	//썸네일도 해보려했는데 안됨 타입이 안맞아서
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item" >
			<img 
				className="ui small image"
				alt={video.snippet.title} 
				src={video.snippet.thumbnails.medium.url} 
			/>
			<div className="content">
				<div className="header">
					{video.snippet.title}
				</div>
				<div className="description"></div>
			</div>
		</div>
	)
}

export default VideoItem;