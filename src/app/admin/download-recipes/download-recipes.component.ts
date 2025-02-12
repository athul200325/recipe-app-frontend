import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download-recipes',
  templateUrl: './download-recipes.component.html',
  styleUrl: './download-recipes.component.css'
})
export class DownloadRecipesComponent {
  allDownloads:any=[]

  constructor(private api:ApiService){}

    ngOnInit(){
      this.getAllDownloads()
    }
    
    getAllDownloads(){
      this.api.getAllDownloads().subscribe((res:any)=>{
        this.allDownloads = res
        console.log(this.allDownloads)
        
      })
    }

}
