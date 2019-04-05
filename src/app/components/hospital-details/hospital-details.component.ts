import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { faUpload, faTrash, faPlusCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Room } from 'src/app/models/room';
import { Photo } from 'src/app/models/photo';
import { Accreditation } from 'src/app/models/accreditation';

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
  submitted = false;

  hospitalName = 'Durdans Hospital PLC';
  hospitalAddress = 'Singapore, 12 Woodbine long named road';
  hospitalImages: Photo[] = [
    { imageUrl: '../../../assets/hospital1.png' },
    { imageUrl: '../../../assets/hospital2.png' },
    { imageUrl: '../../../assets/hospital3.png' },
    { imageUrl: '../../../assets/hospital4.png', isCover: true },
    { imageUrl: '../../../assets/hospital5.png' },
    { imageUrl: '../../../assets/hospital6.png' },
    { imageUrl: '../../../assets/hospital7.png' },
    { imageUrl: '../../../assets/hospital8.png' },
  ];

  accreditations: Accreditation[] = [
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Name of accreditation' },
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Long name of accreditation that takes several strokes' },
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Long name of accreditation' },
    { imageUrl: '../../../assets/accreditation.png', status: 'pending', name: 'Name of accreditation' },
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Name of accreditation' },
    { imageUrl: '../../../assets/accreditation.png', status: 'active', name: 'Long name of accreditation' }
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      contactNumbers: this.fb.array([]),
      fax: [],
      website: ['', Validators.required],
      highlight1: ['', Validators.required],
      description: ['', Validators.required],
      currency: [],
      rooms: this.fb.array([]),
      meals: this.fb.array([])
    })
  }

  onSubmit() {
    this.submitted = true;
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.detailsForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
