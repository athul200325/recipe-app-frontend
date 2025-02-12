
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
registerForm:FormGroup

constructor(private fb:FormBuilder,private api:ApiService, private router : Router){
  this.registerForm= this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })

}


register(){
  if(this.registerForm.valid){
    const  reqBody=  {username:this.registerForm.value.username,
      email:this.registerForm.value.email,
    password:this.registerForm.value.password   } 
    this.api.registerAPI(reqBody).subscribe({
      next:(res:any)=>{
        alert(`${res.username} has been successfully registered`)
        this.registerForm.reset()
        this.router.navigateByUrl('/login')
      },
      error:(reason:any)=>{
        alert(reason.error)
      }   
    })
  }
  else{
    alert('Registration failed')
  }
}
// register(){
//   const username = this.registerForm.value.username
//   const email = this.registerForm.value.email
//   const password = this.registerForm.value.password

//   if(username&& email&& password){
//     this.api.registerAPI({username,email,password}).subscribe((res:any)=>{
//       alert("reg success")
//       this.registerForm.reset()
//     })
//   }else{

//       alert('Please Fill Misisng Fields')
//   }
// }

}
