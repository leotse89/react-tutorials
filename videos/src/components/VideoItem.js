import './VideoItem.css'
import React from 'react';

const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

const VideoItem = ({video, onVideoSelect}) => {
	return(
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img alt={renderHTML(video.snippet.title)} className="ui image" src={video.snippet.thumbnails.medium.url} />
			<div className="content">
			  	<div className="header">{renderHTML(video.snippet.title)}</div>
			</div>
		</div>
	); 
}

export default VideoItem;