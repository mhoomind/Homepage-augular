import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-business',
  templateUrl: './business.html',
  styleUrls: ['./business.scss'],
})
export class Business implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
  async goto(){
    await this.router.navigate(['/business']);
}
}
