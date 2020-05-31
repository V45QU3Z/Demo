import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './product/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MaterialModule,
  CommonModule,
  ReactiveFormsModule
],
  exports: [RouterModule],

  entryComponents: [
    DialogComponent
  ],

  declarations: [
    AdminComponent,
    ProductComponent,
    HomeComponent,
    DialogComponent
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }, {
    provide: MAT_DIALOG_DATA,
    useValue: {} // Add any data you wish to test if it is passed/used correctly
  }]
})
export class AdminRoutingModule { }
