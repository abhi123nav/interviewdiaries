import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

import { GateComponent } from './components/gate/gate.component';
import { HomeComponent } from './components/home/home.component';

import { PlacementcompaniesComponent } from './components/placementcompanies/placementcompanies.component';
import { PlacementsComponent } from './components/placements/placements.component';




const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"Home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
  path:"Placementscompanies",
  component:PlacementcompaniesComponent,//PlacementsComponent
  pathMatch:"full"
},
{
  path:"Gate",
  component:GateComponent,
  pathMatch:"full"
},
{
  path:"About",
  component:AboutComponent,
  pathMatch:"full"
},


{
  path:'Placementscompanies/:cname',
  component: PlacementsComponent,
  // component:WiproComponent,
  // component:AccentureComponent,
 
  //  children: [

  //   {
  //     path: 'wipro', component:WiproComponent,
     
  //   },
  //  ],
   
  //  resolve:{
  //   data:RouteResolver,
  // },
},

// {
//   path:"Placementscompanies",
//   // component:AccentureComponent,
//    children: [

//     {
//       path: 'accenture', component: AccentureComponent
//     },
//    ]
// },


// {
//   path:"tcsinnovator",
//   component:TCSInnovatorComponent,
//   pathMatch:"full"
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
