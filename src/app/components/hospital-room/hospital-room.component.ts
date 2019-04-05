import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-hospital-room',
  templateUrl: './hospital-room.component.html',
  styleUrls: ['./hospital-room.component.scss']
})
export class HospitalRoomComponent implements OnInit {


  @Input()
  parentForm : FormGroup;

  deleteIcon = faTrash;
  addIcon = faPlusCircle;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addRoom(name: string, price: number){
    const rooms = this.parentForm.controls.rooms as FormArray;
    const room: Room = {name: name, pricePerNight:price};
    rooms.push(this.fb.group({room: room}));
  }  

}
