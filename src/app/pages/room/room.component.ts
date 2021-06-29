import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import * as go from "gojs";

const $ = go.GraphObject.make;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

/* public model: go.TreeModel = new go.TreeModel(
  [
    {"key":1, "name":"Stella Payne Diaz", "title":"CEO"},
    {"key":2, "name":"Luke Warm", "title":"VP Marketing/Sales", "parent":1},
    {"key":3, "name":"Meg Meehan Hoffa", "title":"Sales", "parent":2},
    {"key":4, "name":"Peggy Flaming", "title":"VP Engineering", "parent":1},
    {"key":5, "name":"Saul Wellingood", "title":"Manufacturing", "parent":4},
    {"key":6, "name":"Al Ligori", "title":"Marketing", "parent":2},
    {"key":7, "name":"Dot Stubadd", "title":"Sales Rep", "parent":3},
    {"key":8, "name":"Les Ismore", "title":"Project Mgr", "parent":5},
    {"key":9, "name":"April Lynn Parris", "title":"Events Mgr", "parent":6},
    {"key":10, "name":"Xavier Breath", "title":"Engineering", "parent":4},
    {"key":11, "name":"Anita Hammer", "title":"Process", "parent":5},
    {"key":12, "name":"Billy Aiken", "title":"Software", "parent":10},
    {"key":13, "name":"Stan Wellback", "title":"Testing", "parent":10},
    {"key":14, "name":"Marge Innovera", "title":"Hardware", "parent":10},
    {"key":15, "name":"Evan Elpus", "title":"Quality", "parent":5},
    {"key":16, "name":"Lotta B. Essen", "title":"Sales Rep", "parent":3}
     ]
); */

  /*   initDiagram(){
      var diagram = new go.Diagram("myDiagramDiv");
      diagram.model = new go.GraphLinksModel(
        [{ key: "Hello" },   // two node data, in an Array
         { key: "World!" }],
        [{ from: "Hello", to: "World!"}]  // one link data, in an Array
      );
    } */

}