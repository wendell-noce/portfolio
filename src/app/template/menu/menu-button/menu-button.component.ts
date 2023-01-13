import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.closeSideNav.emit();
  }

}
