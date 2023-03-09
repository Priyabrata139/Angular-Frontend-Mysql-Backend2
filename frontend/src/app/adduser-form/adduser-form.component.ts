import { Component } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-adduser-form',
  templateUrl: './adduser-form.component.html',
  styleUrls: ['./adduser-form.component.css']
})
export class AdduserFormComponent {
  constructor(private service: UserDataService,private router:ActivatedRoute){}
  userform=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    id: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email])
  });

  onSubmit(){
  console.log(this.userform.value);
  this.service.addNewUser(this.userform.value).subscribe((res)=>{
    console.log(res);
  })
  this.userform.reset();

  }
  
  getparamid:any;
  ngOnInit():void{
  this.getparamid=this.router.snapshot.paramMap.get('id');
  
  }
  onUpdate(){
    this.service.updateUser(this.userform.value,this.getparamid).subscribe((res)=>{
      console.log(res);
    })
    this.userform.reset();
  }

  
}
