import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

 nom: string;
 email: string;
 message: string;

 submitted = false;
  contact: Contact;


  constructor(private builder: FormBuilder) { }
  

  ngOnInit(): void {
  }

  submitForm(){
    
  }

}
