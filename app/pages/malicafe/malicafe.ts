import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-business',
  templateUrl: './malicafe.html',
  styleUrls: ['./malicafe.scss'],
})
export class Malicafe implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
  async nextbusiness(){
    await this.router.navigate(['/maomali']);
  }
  async backhome(){
    await this.router.navigate(['/']);
  }
}
