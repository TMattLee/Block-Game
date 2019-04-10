import React from 'react';
import Grid from './Grid';
import AppContext, { app } from '../../context/app.context';


const GameCenter = () => {
	return <div style={styles.center}>
		<Grid />
	</div>
}

const styles = {
	center: {
		width:			'50%',	
		margin:			'0px auto',
	},
}

export default GameCenter;