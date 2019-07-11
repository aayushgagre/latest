import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn:'root'
})


export class EmployeeService{
    
    constructor(private http:HttpClient){}

    empNew1:any[]=[{empId:1001,empName:"aayush",empSalary:1000,empDepartment:"fnbjkaf"},
                    {empId:1002,empName:"rupen",empSalary:1200,empDepartment:"dsasf"}                        
                    ];

    getAllEmployee(){
        //return this.http.get("assets/employee.json");

    }

 /*   myMethod(data1) {
        console.log(data1);  
        
    }*/
    addEmployees(data:any){
        this.empNew1.push(data);
        return true;
    }
    
    sendEmployee(){
        return this.empNew1;
    }

   

}