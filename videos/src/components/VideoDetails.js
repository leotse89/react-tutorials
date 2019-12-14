import './VideoDetails.css';
import React from 'react';

const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

const formatDate = (string) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

const VideoDetails = ({video}) => {
	if(!video){
		return (
			<div>
				Loading...
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="ui link cards">
			<div className="card">
				<div className="ui embed">
					<iframe src={videoSrc} allowFullScreen></iframe>
				</div>
				<div className="content">
					<div className="header">{renderHTML(video.snippet.title)}</div>
					<div className="meta">
						<div>{formatDate(video.snippet.publishedAt)}</div>
					</div>
					<div className="description">
						{renderHTML(video.snippet.description)}
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default VideoDetails;