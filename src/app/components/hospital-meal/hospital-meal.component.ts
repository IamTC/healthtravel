import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospital-meal',
  templateUrl: './hospital-meal.component.html',
  styleUrls: ['./hospital-meal.component.scss']
})
export class HospitalMealComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  deleteIcon = faTrash;
  addIcon = faPlusCircle;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  addMeal(meal:string){
    const meals = this.parentForm.controls.meals as FormArray;
    meals.push(this.fb.group({meal: meal}));
  }


}
