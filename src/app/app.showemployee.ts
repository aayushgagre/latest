import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './app.employeeservice'
import { ActivatedRoute,Params} from '@angular/router';

@Component({
    selector:'show-emp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{
    constructor(private myService:EmployeeService,private routes: ActivatedRoute){
        
    }
    public empNew:any;
   

    empAll:any[]=[];
    empNew1:any[]=[];
    data:any;
    ngOnInit(){
  //this.myService.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    this.empNew1=this.myService.sendEmployee();

     this.data=this.routes.snapshot.params['id'];
    }


    searchedData:any[]=[];

    
       
  
}