import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import * as go  from 'gojs';


const $ = go.GraphObject.make;
@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  public palette:go.Palette = null;
  public diagram:go.Diagram = null;

  //to get data model for palette section
  @Input()
  public model: go.ObjectData[];
  //to let the inspector know if any node is selected
  @Output()
  public nodeClicked = new EventEmitter();
  constructor() { }
  
   ngOnInit(): void {
    this.diagram = 
    $(go.Diagram,"myDiagramDiv",
    {
      "undoManager.isEnabled":true
    })
  
    this.diagram.nodeTemplate = 
    $(go.Node,"Auto",
      $(go.Shape,"RoundedRectangle",
      {fill:'Gray'},
      new go.Binding("fill","color"),
      {portId:"",fromLinkable:true,toLinkable:true,cursor:"pointer"}),
      $(go.TextBlock,{margin:3},
        new go.Binding("text","key"))
      );
      
    //--palette-- 
    this.palette =
    $(go.Palette, "myPaletteDiv",
    {
      layout:$(go.GridLayout,{alignment:go.GridLayout.Location})
    }); 
    // must name or refer to the DIV HTML element
    this.palette.nodeTemplate =
    $(go.Node,"Vertical",
    {
    locationObjectName:"TB",locationSpot:go.Spot.Center},
    $(go.Shape,
      {
        width:80,height:20,fill:"white"},
        new go.Binding("fill","color")),
        $(go.TextBlock,{name:"TB"},
        new go.Binding("text","key"))
    );
    this.palette.model.nodeDataArray =this.model;
      //when selection changes, an event emited to app-component updating the selected node
        this.diagram.addDiagramListener('ChangedSelection',(e)=>{
          const node = this.diagram.selection.first();
          this.nodeClicked.emit(node);
        })
  }

}
