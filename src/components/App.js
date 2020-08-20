import React from 'react';
import '../css/style.css';
import {parent, child, genre} from '../data/Data';

// https://api.unsplash.com/search/photos?client_id=40y9HwQVsRa1ijbhnJWBdDyy7STUGrl97c01sHyW14A&query=kucing&page=1
class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {parent:[],child:[],genre:[]};
	}

	componentDidMount() {
		this.setState({parent:parent,child:[],genre:[],selected: ""});

	}

	handleChangeParent = event => {	
		let childParent = child.filter(item => item.parent_ref === event.target.value);
		this.setState({child: childParent,genre:[]});
	}
	
	handleChangeChild = event => {
		let genreChild = genre.filter(item => item.child_ref === event.target.value);
		this.setState({genre: genreChild});
	}
	handleChangeGenre = event => {
		this.setState({selected: event.target.value});
	}

	render() {
	
	    return (
	    	<div className="w-full max-w-xs mx-auto mt-20">
			  	<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				    <div className="mb-4">
				      <label className="block text-gray-700 text-sm font-bold mb-2">Choose</label>
			    		<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.handleChangeParent}>
			    			<option>All</option>
			    			{this.state.parent.map (item => 
			    				<option key={item.name} value={item.name}>{item.title}</option>
			    				)};
			    		</select>
		    		</div>
		    		<div className="mb-4">
		    			<label className="block text-gray-700 text-sm font-bold mb-2">Type</label>
		    			<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.handleChangeChild}>
			    			<option>All</option>
			    			{this.state.child.map (item => 
			    				<option key={item.name} value={item.name}>{item.title}</option>
			    				)};
			    		</select>
		    		</div>
		    		<div className="mb-4">
		    			<label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
		    			<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.handleChangeGenre}>
			    			<option>All</option>
			    			{this.state.genre.map (item => 
			    				<option key={item.id} value={item.title}>{item.title}</option>
			    				)};
			    		</select>
		    		</div>
	    		</form>
	    	</div>
	    );
	  }
}

export default App;
