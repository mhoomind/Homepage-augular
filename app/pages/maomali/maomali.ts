import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-maomali',
  templateUrl: './maomali.html',
  styleUrls: ['./maomali.scss'],
})
export class Maomali implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
  async goto(){
    await this.router.navigate(['/business']);
  }
  async backhome(){
    await this.router.navigate(['/']);
  }
  async nextbusiness(){
    await this.router.navigate(['/maligrow'])
  }
}
