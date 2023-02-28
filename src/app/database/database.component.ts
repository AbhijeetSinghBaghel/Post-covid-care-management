import { Component,    OnInit } from '@angular/core';
import {SignupService} from 'src/app/signup.service'
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  constructor (private user :SignupService ){}

  userData :any =[];

  ngOnInit(): void {
      this.user.getAlluser().subscribe((alldata : any)=> {
        // console.log (alldata);
        // this.userData=alldata;
      }
    )
  }
}
