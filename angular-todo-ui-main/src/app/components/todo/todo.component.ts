import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { title } from 'node:process';

import { v4 as id } from 'uuid';



@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    constructor() { }
	todo:string;
	complete:boolean;
	showModal : boolean;
	

	showmodel:boolean;
	


	
	todoList: any [] = [
		{
			id: id().slice(0, 3),
			title: "eat",
			complete: false
		},
		{
			id: id().slice(0, 3),
			title: "drink",
			complete:false
		},
		{
			id: id().slice(0, 3),
			title: "Chow",
			complete: false
		},
		{
			id: id().slice(0, 3),
			title: "Sleep",
			complete: false
		},
		{
			id: id().slice(0, 3),
			title: "Listen to music",
			complete: false
		},
		{
			id: id().slice(0, 3),
			title: "Finish the food",
			complete: true
		},
		{
			id: id().slice(0, 3),
			title: "Excrete the food",
			complete: false
		}
	]

	indexToUpdate:number;
	updatetoInput:string='';

	todoForm: any = new FormGroup({
		title: new FormControl('')
	})

	ngOnInit(): void {}


	submit():void{
	let listItem:any ={
		id: id().slice(0, 3),
		title: this.todo,
		complete:false
	};
	this.todoList.push(listItem);

	this.todo='';
}

deleteItem(todo:any){
	
	
	this.todoList.splice(todo,1);
	console.log("deleted");

}
completedTask(todo:any){
	todo.complete=!todo.complete;
	console.log(todo);

}

title    : string;
updateToInput: String;

show(index:number){
    
	this.indexToUpdate = index;
	this.showModal=true;

	console.log(this.indexToUpdate)
	this.title= this.todoList[this.indexToUpdate].title
	console.log(this.title)
}

hide()
{
	let select = this.indexToUpdate;
	this.todoList[select].title =  this.updateToInput;
	this.updateToInput = '';

  this.showModal = false;
  
}

}