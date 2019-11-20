import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	state = {
		pigIndex:0,
		pigArray:[],
		displayPig:false
	}

	componentDidMount() {
		fetch('https://api.tenor.com/v1/search?q=pigs&key=LIVDSRZULELA&limit=50')
		.then(res=>res.json())
		.then(this.renderPig)
	}

	renderPig = (json) => {
		
		this.setState({
			displayPig:true,
			pigArray:json
		})
	
	}

	pigIterate = () => {
		console.log("chainging Pig")
		let pigIndex = this.state.pigIndex
		pigIndex++
		this.setState({pigIndex})
	}

	render () {
	return (
		<div className="navWrapper">
			{this.state.displayPig ? <img onClick={this.pigIterate} src={`${this.state.pigArray.results[this.state.pigIndex]["media"][0]["tinygif"]["url"]}`}/> : "loading"}
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)}
}

export default Nav
