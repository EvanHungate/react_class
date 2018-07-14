import React, { Component } from 'react';
import { render } from 'react-dom'; //need to specify what you're using react for (you can use react for native mobile app)
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
	constructor(){
		super();
		this.state={
			count: 5
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({count: this.state.count + 1})
	}
	render(){
		return(
				<div>
					<p>Visitor Count : {this.state.count}</p>
					<button onClick={this.handleClick}>Increment</button>
				</div>
			)
	}
}

class SearchBar extends React.Component {
	render() {
		return(
			<div>
				<input type="text" placeholder="enter term" name="" />
			</div>
		)

	}
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Wazzaapppp</h1>
                <SearchBar />
                <Counter />
            </div>
        )
    }
}

export default App;
