import { Component, OnInit, Input } from '@angular/core';
import { Accreditation } from 'src/app/models/accreditation';
import { faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accreditation',
  templateUrl: './accreditation.component.html',
  styleUrls: ['./accreditation.component.scss']
})
export class AccreditationComponent implements OnInit {

  @Input()
  accreditations : Accreditation[];

  deleteIcon = faTrashAlt;
  addIcon = faPlusCircle;
  
  constructor() { }

  ngOnInit() {
  }

  deleteAccreditation(index: number){
    this.accreditations.splice(index,1);
  }

  addAccreditation(){
    this.accreditations.push(this.accreditations[0]);
  }
}
