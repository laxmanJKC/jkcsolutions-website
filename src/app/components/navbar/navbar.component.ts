import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private open: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAction() {
    console.log("onAction"+this.isOpen());
    this.open = !this.open;
  }

  isOpen(): Boolean {
    return this.open;
  }
}
