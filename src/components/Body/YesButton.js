import React from 'react';
import AppContext, { app } from '../../context/app.context';

class YesButton extends React.Component {
	constructor(){
		super();
		this.state = {
			currentStyle: styles.yesButton,
			isHoveredOver: false,
		}
	}
	
	onMouseEnter = () => {
		console.log('e')
		this.setState({
			currentStyle: styles.yesButtonHover,
			isHoveredOver: true
		});
	}
	
	onMouseLeave = () => {
		console.log('l')
		this.setState({
			currentStyle: styles.yesButton,
			isHoveredOver: false
		});
	}
	
	render(){
		return<div 
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				style={this.state.currentStyle} onClick={this.props.startNewGame}>Yes</div>
	}
}

const styles = {
	yesButton:{
		width:				'200px',
		fontWeight: 	'bold',
		fontSize:			'4em',
		margin:				'20px auto',
		borderRadius:	'10px',
		//fontFamily:		'cursive',
		color:				'#fff',
		backgroundColor: '#bbb',
		
	},
	
}

styles.yesButtonHover = {
	...styles.yesButton,
	boxShadow:		'0px 0px 5px gray',
	color:				'#fff',
	backgroundColor: 'green',
	cursor:				'pointer'
}

export default YesButton;