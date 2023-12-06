import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  editIndex :any
  taskForm!: FormGroup;
  isSave: boolean = true;
  isUpdate: boolean = false;
  taskList: any = [
    {firstname:'Ashish',mobile:'7894561230', email:'ancd@gmail.com'}
  ]

  ngOnInit() {
    this.taskForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ])
    })
  }

  get firstname() {
    return this.taskForm.get('firstname')
  }
  get mobile() {
    return this.taskForm.get('mobile')
  }
  get email() {
    return this.taskForm.get('email')
  }

  onSubmit() {
    
    this.taskList.push(this.taskForm.value)
    // console.log(this.taskForm.value);
    this.taskForm.reset();

  }
  onUpdate(){
    this.taskList[this.editIndex] = this.taskForm.value
    console.log(this.taskForm.value);  
    this.isSave = true;
    this.isUpdate = false;  
    this.taskForm.reset()
  }
  onEdit(emp:any) {
    // console.log(emp);
    // console.log(this.taskList);
    this.editIndex = emp;
    
    this.isSave = false;
    this.isUpdate = true;
    this.taskForm.patchValue(
      {firstname:this.taskList[this.editIndex].firstname,
      mobile:this.taskList[this.editIndex].mobile,
      email:this.taskList[this.editIndex].email});
      
  }
  
  onDelete(emp:any) {
this.taskList.splice(emp,1)
  }
}
