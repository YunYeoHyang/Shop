import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressComponent} from "./pages/address/address.component";


const routes: Routes = [
  {
    path: 'pages',
    component: AddressComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
