import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public navController: NavController
  ) { }

  @Input() title: string;

  ngOnInit() {}

  
  volver() {
    this.navController.navigateRoot('admin');
  }
}
