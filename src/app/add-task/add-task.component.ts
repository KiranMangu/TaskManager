import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  min: Number = 1;
  max: Number = 100;

  taskGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.taskGroup = this._fb.group({
      task: ['', Validators.required],
      parentTask: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }, { validator: this.checkDate });
  }

  checkDate(group: FormGroup): any {
    if (group.controls.startDate.value === null && group.controls.endDate.value === null && group.controls.endDate.value > group.controls.startDate) {
      return { notValid: true };
    }
    return null;
  }
}
