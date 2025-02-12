import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

  allTestimony:any=[]
  constructor(private api:ApiService){}
  ngOnInit(){
  this.getAllTestimonials()
  }


  
  getAllTestimonials(){
    this.api.getAllTestimoniesAPI().subscribe((res:any)=>{
      this.allTestimony=res

      console.log(this.allTestimony);
      
    })

    
  }
  updateTestimonyStatus(id:string,status:string){
    this.api.updateTestimonyAPI(id,status).subscribe((res:any)=>{
      this.getAllTestimonials()
      
    })
  }



  


}
