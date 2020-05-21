import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedNode = null;
  public model:go.ObjectData = 
    [
      { key:1, name: "Image", color: "white"},
      { key:2, name: "Compute", color: "white" },
      { key:3, name: "Storage", color: "white" },
      { key:4, name: "Services", color: "white" },
      { key:5, name: "Environment", color: "white" },
      { key:6, name: "Service Ports", color: "white" },
    ]
  public setSelectedNode(node)
  {
    this.selectedNode = node;
  }
}
