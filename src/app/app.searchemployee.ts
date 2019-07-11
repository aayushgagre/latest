import {Component} from '@angular/core';
import { EmployeeService } from './app.employeeservice';
import {  Router } from '@angular/router';

@Component({
    selector:'search-emp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent {
    public constructor(private myService: EmployeeService,private route: Router) {

    }
    empId1:number;

    allData:any;
    searchedData:any[]=[];

   

    /*searchEmp(){
        this.allData=this.myService.sendEmployee();
        for(let d of  this.allData){
            if(d.empId==this.empId1)
                this.searchedData.push(d);

        }
        
    }*/

    searchEmp(){
        this.route.navigate(['show',this.empId1]);
    }

   
    
}