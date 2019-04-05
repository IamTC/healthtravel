import { Component, OnInit } from '@angular/core';
import { faCoffee, faListUl, faSyringe, faUserNurse, faCommentAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  coffee = faCoffee;
  listIcon = faListUl;
  syringeIcon = faSyringe;
  doctorIcon = faUserNurse;
  commentIcon = faCommentAlt;
  dollarIcon = faDollarSign;

  companyLogo = '../../../assets/htiLogo.png';

  constructor() { }

  ngOnInit() {
  }

}
