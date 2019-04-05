import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { faUpload, faCircle, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospital-photos',
  templateUrl: './hospital-photos.component.html',
  styleUrls: ['./hospital-photos.component.scss']
})
export class HospitalPhotosComponent implements OnInit {


  @Input()
  hospitalImages: Photo[];

  uploadIcon = faUpload;
  deleteIcon = faTrash;
  notCover = faCircle;
  cover = faCheckCircle;

  constructor() { }

  ngOnInit() {
  }

  deleteImage(imageIndex: number){
    this.hospitalImages.splice(imageIndex,1);
  }

}
