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
      { key: "Image", color: "white"},
      { key: "Compute", color: "white" },
      { key: "Storage", color: "white" },
      { key: "Services", color: "white" },
      { key: "Environment", color: "white" },
      { key: "Service Ports", color: "white" },
    ]
  public setSelectedNode(node)
  {
    this.selectedNode = node;
  }
}
