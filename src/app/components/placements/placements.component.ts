import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/service/fetch.service';

import { User } from 'src/app/user';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {
  message:any;
  copusers:User[]=[];
  pid:any;
  cname:any;
  constructor(private service:FetchService,private activatedRoute:ActivatedRoute) { }


 //ActivatedRoute is an external service imported from @angular/router . It is not the route.resolver.ts

  ngOnInit(): void {
    // this.service.getData().subscribe((data:User[])=>{
    //   this.users=data;
    //     });
   
        // this.message=this.share.getData();
        // console.log(this.message)
        // console.log("Helloo from wipro component")
       this.activatedRoute.paramMap.subscribe(param=>{
        console.log(param);
         
      
       this.pid= param.get('cname');
       console.log(this.pid)
       this.cname=this.pid
       this.service.getDatabycname(this.pid).subscribe(res=>{
        console.log(res);
        this.message=res;
         console.log(this.service.getDatabycname(this.pid))
      })
       })
        // this.message= this.activatedRoute.snapshot.data['data'];
          // console.log('After resolve from wipro component')
          // this.message=data
          // this.message=this.share.getData();
          // console.log(this.message)
        // })
  }

}
