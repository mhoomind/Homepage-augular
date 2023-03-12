import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-business',
  templateUrl: './malifood.html',
  styleUrls: ['./malifood.scss'],
})
export class Malifood implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
  async goto(){
    await this.router.navigate(['/business']);
}
async nextbusiness(){
    await this.router.navigate(['/malicafe']);
}
  async backhome(){
    await this.router.navigate(['/']);
  }
}
