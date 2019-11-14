import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Task } from '../_model/task.model';
import { ParentTask } from '../_model/parent-task.model';

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

  newTask: Task;
  newParentTask: ParentTask;

  ngOnInit() {
    this.taskGroup = this._fb.group({
      task: ['', Validators.required],
      priority: [''],
      parentTask: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }, { validator: this.checkDate });
  }

  checkDate(group: FormGroup): any {
    if (group.controls.endDate.value < group.controls.startDate.value) {
      // console.log('--invalid-----');
      return { notValid: true };
    }
    // console.log('--valid-----');
    return null;
  }

  onSubmit(): void {
    // console.log(this.taskGroup.value);
    this.newTask = new Task(this.taskGroup.getRawValue());
    if (this.taskGroup.parent !== null) {
      this.newParentTask = new ParentTask(this.taskGroup.controls['parentTask'].value);
    }
    // console.log(JSON.stringify(this.newTask));
  }

  resetFields(): void {
    this.taskGroup.reset();
  }
}
