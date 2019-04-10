import React from 'react';

class Shape {
	shapeTypes = ['s','z','L', 'j', 'T','o','l'];
	shapes = {
		s:{
			color: 'RED',
			START:[
				[0,0,0],
				[0,1,1],
				[1,1,0],
				
			],
		},
		z:{
			color: 'BLUE',
			START:[
				[1,1,0],
				[0,1,1],
				[0,0,0]
			],
			
		},
		
		L:{
			color: 'GREEN',
			START:[
				[0,1,0],	
				[0,1,0],	
				[0,1,1],	
			],
		
		},
		
		j:{
			color: 'PURPLE',
			START:[
				[0,1,0],	
				[0,1,0],	
				[1,1,0],	
			],
		},
		
		T:{
			color: 'GRAY',
			START:[
				[0,1,0],
				[1,1,1],
				[0,0,0],
			],
		},
		
		o:{
			color: 'WHITE',
			START:[
				[1,1],
				[1,1],
			],
		},
		
		l:{
			color: 'YELLOW',
			START:[
				[0,1,0,0],
				[0,1,0,0],
				[0,1,0,0],
				[0,1,0,0]
			],
			
		}
	};
	
	constructor(){
		let element = Math.floor(Math.random()*this.shapeTypes.length)
		this.type = this.shapeTypes[element];
		this.shape = this.shapes[this.type]['START'];
		this.color = this.shapes[this.type].color;
		this.canControl = true;
		this.isRotated = false;
		this.currentPosition = {
			x:4,
			y:0
		}
	}
	
	rotate(){
		switch(this.type){
			
			case 'T':
				this.rotateClockwise();
				break;
			
			case 'j':
				this.rotateClockwise();
				break;
				
			case 'L':
				this.rotateClockwise();
				break;
				
			case 'o':
				break;
				
			case 'l':
				if(this.isRotated) {
					this.rotateAntiClockwise()
				} else {
					this.rotateClockwise();
				}
				this.isRotated = !this.isRotated;
				break;
			
			case 's':
				if(this.isRotated) {
					this.rotateAntiClockwise()
				} else {
					this.rotateClockwise();
				}
				this.isRotated = !this.isRotated;
				break;
				
			case 'z':
				if(this.isRotated) {
					this.rotateAntiClockwise()
				} else {
					this.rotateClockwise();
				}
				this.isRotated = !this.isRotated;
				break;
			
			default:
				break;
		}
			
	}
	
	undoRotate(){
		switch(this.type){
			
			case 'T':
				this.rotateAntiClockwise();
				break;
				
			case 'j':
				this.rotateAntiClockwise();
				break;
			
			case 'L':
				this.rotateAntiClockwise();
				break;
				
			case 'l':
				if(this.isRotated) {
					this.rotateAntiClockwise()
				} else {
					this.rotateClockwise();
				}
				this.isRotated = !this.isRotated;
				break;
			
			case 's':
				if(this.isRotated) {
					this.rotateAntiClockwise()
				} else {
					this.rotateClockwise();
				}
				this.isRotated = !this.isRotated;
				break;
				
			case 'z':
				if(this.isRotated) {
					this.rotateAntiClockwise()
				} else {
					this.rotateClockwise();
				}
				this.isRotated = !this.isRotated;
				break;
			
				
			case 'o':
				break;
			
			default:
				break;
		}
	}
	
	rotateClockwise(){
		this.isRotated = false;
		let n = this.shape.length;
		for(let i = 0; i < n /2; i++){
			for(let j = i; j < n - 1 -i; j++){
				let temp = this.shape[i][j];
				this.shape[i][j] = this.shape[n - 1 - j][i];
				this.shape[n - 1 -j][i] = this.shape[n -  1 - i][n - 1 - j];
				this.shape[n -  1 - i][n - 1 - j] = this.shape[j][n - 1 -i];
				this.shape[j][n - 1 -i] = temp;
			}
		}
	}
	
	rotateAntiClockwise(){
		this.isRotated = true;
		let n = this.shape.length;
		for(let i = 0; i < n /2; i++){
			for(let j = i; j < n - 1 -i; j++){
				let temp = this.shape[i][j];
				this.shape[i][j] = this.shape[j][n - 1 - i];
				this.shape[j][n - 1 - i] = this.shape[n - 1 - i][n -  1- j];
				this.shape[n - 1 - i][n -  1- j] = this.shape[n - 1 - j][i];
				this.shape[n - 1 - j][i] = temp;
			}
		}
	}
	
	getShape(){
		return this.shape;
	}
	
	getPosition(){
		return this.currentPosition;
	}
	
	
};

export default Shape;