import { Component, OnInit, Input } from '@angular/core';
import { Form, FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospital-description',
  templateUrl: './hospital-description.component.html',
  styleUrls: ['./hospital-description.component.scss']
})
export class HospitalDescriptionComponent implements OnInit {

  @Input()
  parentForm : FormGroup;

  deleteIcon = faTrash;
  addIcon = faPlusCircle;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  deleteNumber(index: number){
    this.contactNumbers.removeAt(index);
  }

  public get contactNumbers(){
    return this.parentForm.get('contactNumbers') as FormArray;
  }

  addContact(contactNumber : string){
    const contacts = this.parentForm.controls.contactNumbers as FormArray;
    contacts.push(this.fb.group(
      {
        number: new FormControl(contactNumber, 
          [
            Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
          ])
      }));
  }
}
