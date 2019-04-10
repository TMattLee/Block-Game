import React from 'react';
import AppContext, { app } from '../../context/app.context';

import YesButton from './YesButton';
import Shape from '../Shape/Shape';
import Square from '../Shape/Square';


class Grid extends React.Component{
	constructor(){
		super();
		this.gridX = app.gridSizeX;
		this.gridY = app.gridSizeY;
		
		this.state ={
			isGameOver: false,
			timer: 0,
			score: 0,
			gridColor: null,
			shapePosition: null,
			nextShape: app.nextShape,
		}
		app.createGridArray();
		app.spawnNewShape();
	}
	
	startNewGame = () => {
		app.startNewGame();
		this.setState({
			isGameOver: false,
			timer: 0,
			score: 0,
			gridColor: null,
			shapePosition: null,
			nextShape: app.nextShape,
		})
	}
	
	handleKeyDown = (event) => {
		event.preventDefault();
		app.updatePositionOnInput(event.key, Shape);
		if(event.key === 'ArrowDown') app.speedUp(true);
	}
	
	handleKeyUp = (event) => {
		event.preventDefault();
		if(event.key === 'ArrowDown') app.speedUp(false);
	}
	
	updateGrid = () => {
		const { state }= this;
		
		if(state.currentShape && !state.currentShape.canControl) app.spawnNewShape();
		app.updateTimer();
		app.updatePosition();
		app.updateGridColor();
		this.setState({
			isGameOver:				app.isGameOver,
			currentShape:	app.currentShape,
			timer:						app.timer,
			gridColor:				app.gridColor,
			ShapePosition:		app.currentShape.currentPosition,
			nextShape:		app.nextShape
		});
	}
	
	updateScore = () => {
		this.setState({
			score: app.currentScore
		})
	}
	
	renderNextShapeBox = () => {
		let shape = this.state.nextShape.getShape();
		let color = this.state.nextShape.color;
		let nextShapeBox = []
		for (let i = 0; i < shape.length; i++){
			let row = []
			for (let j = 0; j <shape[0].length ; j++){
				if(shape[i][j] == 1 ){
					row.push(<Square i={i} j={j} color={color} styles={styles} />);
				} else {
					row.push(<svg width="20" height="20" key={100*i + j}>
							<rect width="20" height="20" style={styles.blank} />
						</svg>
					);
				}
			}
			nextShapeBox.push(<div style={styles.row} key={i}>{row}</div>);
		}
		return nextShapeBox;
	}
	
	renderRow = (i) => {
		let row = []
		
		for (let j = 0; j < this.gridX; j++){
			const color = app.gridColor[i][j];
			if(color === "BACKGROUND"){
				row.push(<svg width="20" height="20" key={100*i + j}>
						<rect width="20" height="20" style={styles[color]} />
					</svg>
				);
			} else {
				row.push(<Square i={i} j={j} color={color} styles={styles} />);
			}
		}
		
		return row;
	}

	renderGrid = () => {
		let grid = []
		for (let i = 0; i < this.gridY; i++){
				grid.push(<div style={styles.row} key={i}>{this.renderRow(i)}</div>);
		}
		return grid;
	}
	
	componentDidMount(){
		this.updateInterval = setInterval(this.updateGrid, 32);
		this.updateScoreInterval = setInterval(this.updateScore, 500);
		document.addEventListener('keydown', this.handleKeyDown);
		document.addEventListener('keyup', this.handleKeyUp);
	}
	
	componentWillUnmount(){
		clearInterval(this.updateInterval);
		clearInterval(this.updateScoreInterval);
	}
	
	render(){
		if(this.state.isGameOver){
			return<div>
				<h2>
				Gamer Over!<br />
				Would you like to try again?
				</h2>
				<div>
					<YesButton startNewGame={this.startNewGame} />
				
				</div>
			</div>
		}
		return <AppContext.Consumer>
			{ (context) => 
			
				<div style={styles.gameContainer}>
					<div style={styles.dataBox}>
						<div style={styles.scoreBox}>{this.state.score}</div>
					</div>
					
					<div style={styles.gridContainer}>{this.renderGrid(context)}</div>
					
					<div style={styles.nextShapeBox}>
						{ this.renderNextShapeBox() }
					</div>
					
				</div>
				
			}
			
		</AppContext.Consumer>
	}
}


const styles = {
	row:{
		display:				'flex',
		flexDirection:	'row',
	},
	
	BACKGROUND:{
		width:						'20px',
		height:						'20px',
		fill:							'#555',
		//stroke:						'silver'
	},
	blank:{
		width:						'20px',
		height:						'20px',
		fill:							'#555',
		fillOpacity:			'0.0'
		//stroke:						'silver'
	},
	YELLOW:{
		width:						'20px',
		height:						'20px',
		fill:							'yellow',
		//stroke:						'silver'
	},
	WHITE:{
		width:						'20px',
		height:						'20px',
		fill:							'white',
		//stroke:						'silver'
	},
	RED:{
		width:						'20px',
		height:						'20px',
		fill:							'red',
		//stroke:						'silver'
	},
	BLUE:{
		width:						'20px',
		height:						'20px',
		fill:							'blue',
		//stroke:						'silver'
	},
	PURPLE:{
		width:						'20px',
		height:						'20px',
		fill:							'purple',
		//stroke:						'silver'
	},
	GREEN:{
		width:						'20px',
		height:						'20px',
		fill:							'green',
		//stroke:						'silver'
	},
	GRAY:{
		width:						'20px',
		height:						'20px',
		fill:							'gray',
		//stroke:						'silver'
	},
	
	shapeHighlight:{
		fill:						'white',
		fillOpacity:		0.8,
	},
	
	shapeMid:{
		fill:						'black',
		fillOpacity:		0.15,
	},
	
	shapeShadow:{
		fill:						'black',
		fillOpacity:		0.6,
	},
	
	gameContainer:{
		display:				'flex',
		flexDirection:	'row',
		justifyContent:	'space-around',
		marginLeft:			'-80px',
	},
	
	gridContainer:{
		boxShadow:				'0px 0px 2px gray',
		height:					app.gridSizeY * 20 + 'px',
		width:					app.gridSizeX * 20 + 'px',
	},
	
	dataBox: {
		width:					'200px',
		height:					'500px',
		
	},
	
	nextShapeBox: {
		//border:					'2px solid red',
		backgroundColor:	'#ccc',
		padding:					'30px',
		width:						'75px',
		height: 					'75px',
		boxShadow:				'0px 0px 2px gray'
	},
	
	scoreBox: {
		fontSize: 		'1.17em',
		fontWeight: 	'bold',
		width:				'150px',
		height: 			'100px',
		textAlign:		'right'
		
	},
	
	yesButton:{
		fontWeight: 'bold',
		fontSize:	'5em',
		boxShadow:	'0px 0px 2px gray',
		'&:hover':{
			backgroundColor: 'silver'
		}
	}
}

export default Grid