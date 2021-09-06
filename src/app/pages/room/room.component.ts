import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import * as login from '../../auth/login/login.component';
import * as go from "gojs";

const $ = go.GraphObject.make;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomComponent implements OnInit {

  nameUser: string = this.getName();

  constructor() { }

  ngOnInit(): void {

  }

  getName(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

}
