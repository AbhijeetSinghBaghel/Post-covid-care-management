import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
ngOnInit(): void {
  
}


  login: any;
    
    submit(login : any){
    console.log("form submitted", login)
    }


}
