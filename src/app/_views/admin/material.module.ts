import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, 
  MatIconModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, 
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule ,
    MatInputModule,
    MatSnackBarModule
    
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
    
  ]
})
export class MaterialModule { }
