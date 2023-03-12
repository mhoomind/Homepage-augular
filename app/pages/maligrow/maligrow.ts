import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-maligrow',
  templateUrl: './maligrow.html',
  styleUrls: ['./maligrow.scss'],
})
export class Maligrow implements OnInit {

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
}
