import { Component, OnInit } from '@angular/core';
import { faUpload, faTrash, faPlusCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.scss']
})
export class HospitalDetailsComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {    
  }

  deleteAccreditation(){

  }

}
