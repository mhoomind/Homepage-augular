import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
  ) {
  };

  ngOnInit() {
  }

  async goto(){
    await this.router.navigate(['/malifood']);
  }

  async gocafe(){
    await this.router.navigate(['/malicafe']);
  }

  async gomao(){
    await this.router.navigate(['/maomali']);
  }

  async gogrow(){
    await this.router.navigate(['/maligrow']);
  }
}
