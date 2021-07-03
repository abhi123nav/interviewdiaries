import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  states: string[] = [
    'Accenture', 'ADP', 'Bridgei2i', 'Byjus', 'Deloitte', 'ExxonMobil', 'GoldmanSachs', 'Infosys',
    'Intellipaat', 'IQVIA', 'ItdCementation', 'LandT', 'Maybank', 'ScalerAcademy', 'TataProject', 'TCS', 'TcsInnovators',
    'Wipro', 'WSP'
  ];



data={
  id:"",
  cname:"",
  ctc:"",
  cgpa:"",
  email:"",
 name:"",
 stripend:"",
 location:"",
 position:"",
role:"",
test:"",
groupact:"",
interview:"",
suggestion:"",
resources:"",
}
  constructor(private sendservice:FetchService) { }

  ngOnInit(): void {
  }

 doSubmitForm(){
    console.log("working");
this.sendservice.senddata(this.data).subscribe(
  (  response: any)=>{
console.log(response);
  },
  (  error: any)=>{
    console.log(error);
  }
)
  }

}
