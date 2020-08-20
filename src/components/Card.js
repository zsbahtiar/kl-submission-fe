import React from 'react';

function Image(props) {
	return(
		
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
		<a href={`${props.url}`}>
		  <img className="w-full" src={`${props.source}`} alt={`${props.alt}`}/>
		</a>
		
		</div>
		
	);

}

export default Image;