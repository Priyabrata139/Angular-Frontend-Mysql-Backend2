import { Component , OnInit} from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
constructor(private service: UserDataService){}

showAllUsers:any;
ngOnInit(): void {
    this.displayAllUsers();
}
deleteHandeler(id:any){
 this.service.deleteUser(id).subscribe((res)=>{
  console.log(res);
  this.displayAllUsers();
 })
}

displayAllUsers(){
  console.log("yes");
  this.service.getAllUser().subscribe((res)=>{
    console.log(res.data);
    this.showAllUsers=res.data;
  });
  console.log("display done");
}

// updateUserForm:boolean=false;

updateHandeler(id:any){
this.displayAllUsers();
// this.updateUserForm=true;

}

}
