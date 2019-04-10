import React from 'react';
import Shape from '../components/Shape/Shape';

const defaults = {
	isGameOver: false,
	start: true,
	timer: 0,
	lastUpdated: 0,
	maxSpeed: 20,
	speed: 20,
	floatTime: 30,
	shapeTypes: ['s','z','L', 'j', 'T','o','l'],
	currentShape: null,
	currentScore: 0,
	gridCollision:[],
	gridColor:[],
	currentShape: null,
	nextShape: new Shape(),
	currentPosition:{
		x: 0,
		y: 0,
	},
	currentRotation: 'UP',
	gridSizeX: 10,
	gridSizeY: 20,
}

export default defaults;