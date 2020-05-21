import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {
  public _selectedNode:go.Node;
  public formStatus = false;
  //model data to change property of selected node
  public data = {
    key:null,
    color:null
  };
  //inspector can change the input model present
  @Input()
  public model:go.ObjectData;
  //angular input property for selectedNode
  @Input()
  get selectedNode(){ return this._selectedNode; }
  set selectedNode(node:go.Node){
    //if an node is selected 
    if(node)
    {
      
      this._selectedNode = node;
      this.data.key =  this._selectedNode.data.key;
      this.data.color = this._selectedNode.data.color;
      this.formStatus=true;
    }
    else
    {
      this._selectedNode = null;
      this.formStatus = false;
    }

  }
  constructor() { }

  ngOnInit(): void {
  }
  public onCommitForm()
  {
    this.formStatus = false;
  }

}
