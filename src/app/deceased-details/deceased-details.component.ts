import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deceased-details',
  templateUrl: './deceased-details.component.html',
  styleUrls: ['./deceased-details.component.css']
})

export class DeceasedDetailsComponent {

  login: any;
    
    submit(login : any){
    console.log("form submitted", login)
    }
}
