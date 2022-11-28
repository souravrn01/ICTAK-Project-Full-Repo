
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alumni-header',
  templateUrl: './alumni-header.component.html',
  styleUrls: ['./alumni-header.component.css']
})
export class AlumniHeaderComponent implements OnInit {

  constructor() { }

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit()

  }

}
