import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { faUpload, faTrash, faPlusCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.scss']
})
export class HospitalDetailsComponent implements OnInit {

  detailsForm: FormGroup;

  uploadIcon = faUpload;
  deleteIcon = faTrash;
  addIcon = faPlusCircle;
  editIcon = faPencilAlt;
  hospitalName = 'Durdans Hospital PLC';
  hospitalAddress = 'Singapore, 12 Woodbine long named road';
  hospitalImages = [ 
    '../../../assets/hospital1.png',
    '../../../assets/hospital2.png',
    '../../../assets/hospital3.png',
    '../../../assets/hospital4.png',
    '../../../assets/hospital5.png',
    '../../../assets/hospital6.png',
    '../../../assets/hospital7.png',
    '../../../assets/hospital8.png',
  ];

  accreditations = [
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Name of accreditation'},
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Long name of accreditation that takes several strokes'},
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Long name of accreditation'},
    { imageUrl: '../../../assets/accreditation.png', status: 'pending', name: 'Name of accreditation'},
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Name of accreditation'},
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Long name of accreditation'}
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {    
    this.detailsForm = this.fb.group({
      email: [null, Validators.required],
      contactNumbers: this.fb.array([]),
      fax :[],
      website: [null, Validators.required],
      highlights: [null, Validators.required],
      description: [null, Validators.required],
      currency: [null, Validators.required],
      rooms: this.fb.array([]),
      meals: this.fb.array([])
    })
  }

  get contactNumbers(){
    return this.detailsForm.get('contactNumbers') as FormArray;
  }

  addContact(contactNumber : string){
    const contacts = this.detailsForm.controls.contactNumbers as FormArray;
    contacts.push(this.fb.group({number: contactNumber}));
  }

  addRoom(name: string, price: number){
    const rooms = this.detailsForm.controls.rooms as FormArray;
    const room: Room = {name: name, pricePerNight:price};
    rooms.push(this.fb.group({room: room}));
  }

  addMeal(meal:string){
    const meals = this.detailsForm.controls.meals as FormArray;
    meals.push(this.fb.group({meal: meal}));
  }

  deleteAccreditation(){

  }

}
