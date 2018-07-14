import React, { Component } from 'react';
import { render } from 'react-dom'; //need to specify what you're using react for (you can use react for native mobile app)
import logo from './logo.svg';
import './App.css';

class FeaturedDonut extends React.Component{
	render(){
		return(
				<div>feature is : PB & J</div>
			)
	}
}

class App extends React.Component {
    render() {
        return (
            <div>
                <FeaturedDonut />
            </div>
        )
    }
}

export default App;