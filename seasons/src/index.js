import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = {
		lat: null,
		long: null,
		errMsg: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				})
			},
			err => {
				this.setState({errMsg: err.message});
			}
		);
	}

	componentDidUpdate() {
		console.log('Component was re-rendered');
	}

	renderContent() {
		if(this.errMsg && !this.state.lat){
			return (
				<div>Error: {this.state.errMsg}</div>
			);
		}
		if(!this.errMsg && this.state.lat){
			return (
				<SeasonDisplay lat={this.state.lat} long={this.state.long} />
			);
		}
		return (
			<Spinner message="Please accept location request..."/>
		);
	}

	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);