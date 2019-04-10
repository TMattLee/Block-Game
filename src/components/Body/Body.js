import GameCenter from './GameCenter';

import React from 'react'

const Body = () => {
	return (
		<div style = {styles.body}>
			<GameCenter />
		</div>
	)
}

const styles = {
	body:{
		display:				'flex',
		flexDirection:	'column',
		height:					'calc(100vh - 80px)',
	}
}

export default Body;