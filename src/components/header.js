import AppContext from '../context/app.context';
import React from 'react';

class Header extends React.Component{
	
	
	
	render(){
		return 	<div style={{height:'80px'}}><h1 style={{paddingRight:'20px'}}>Block Game</h1></div>
	}
}

Header.contextType = AppContext;

export default Header;