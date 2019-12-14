import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import youtube from '../api/youtube';

class App extends React.Component{
	state = {videos: [], selectedVideo: null};

	componentDidMount(){
		this.onTermSubmit('billie eilish mv');
	}

	onTermSubmit = async term => {
		const resp = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({
			videos: resp.data.items,
			selectedVideo: resp.data.items[0]
		});
	}

	onVideoSelect = video => {
		this.setState({selectedVideo: video});
	}

	render(){
		return(
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ten wide column">
						<VideoDetails video={this.state.selectedVideo} />
					</div>
					<div className="six wide column">
						<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;