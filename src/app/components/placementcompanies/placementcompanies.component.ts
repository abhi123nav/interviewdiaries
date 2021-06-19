import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FetchService } from 'src/app/service/fetch.service';

import { User } from 'src/app/user';
@Component({
  selector: 'app-placementcompanies',
  templateUrl: './placementcompanies.component.html',
  styleUrls: ['./placementcompanies.component.css']
})
export class PlacementcompaniesComponent implements OnInit {

  users:User[]=[];
 copusers:User[]=[];
  constructor(private service:FetchService,private route: ActivatedRoute) { }

 

  ngOnInit(): void {
    // this.service.getData().subscribe((data:User[])=>{
    //   this.users=data;
    //   console.log(this.users);
    //     });
    //     this.share.setData(this.users);  
    //   // console.log(users);
      
    // this.service.getDatabycname(cname).subscribe((data:User[])=>{
    //   this.copusers=data;
    //   console.log(cname);
    //     });
    //     this.share.setData(this.copusers);  
    
  //   this.route.params.forEach((params: Params) => {
  //     let id = +params['id']; // (+) converts string 'id' to a number
  //     this.getbycname(id);
  // });
    
  }

  // public getbycname(cname){
  //   this.service.getDatabycname(cname).subscribe((data:User[])=>{
  //     this.copusers=data
  //     this.share.setData(this.copusers)
  //     console.log(this.copusers)
  //     console.log("Hello from placement comanies")
     
  //     this.share.setcopname(cname);
  //       },
  //       error=>console.log(error)
  //       );
      
        
  //     }

}
