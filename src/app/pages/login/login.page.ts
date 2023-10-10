import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor() { 
  }

  ngOnInit() {
  }

  public login() {
    alert("Yet to implement");
  }

}
