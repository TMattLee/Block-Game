import React from 'react';

const Square = (props) => {
	const { i, j, color, styles } = props;
	return <svg width="20" height="20" key={100*i + j}>
		<rect width="20" height="20" style={styles[color]} />
		<polygon points="0,0 20,0 17,3 3,3" style={styles.shapeHighlight} />
		<polygon points="0,0 3,3 3,17 0,20" style={styles.shapeMid} />
		<polygon points="20,0 20,20 17,17 17,3" style={styles.shapeMid}/>
		<polygon points="0,20 20,20 17,170 3,17" style={styles.shapeShadow} />
	</svg>
};

//<circle cx="10" cy="10" r="3" style={styles.shapeMid} />

export default Square;