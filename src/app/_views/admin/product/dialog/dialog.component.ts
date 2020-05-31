import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Product } from '../../../../models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formProduct: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private productService: ProductService,
    private matDialog: MatDialogRef<DialogComponent>,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {

    if(this.product!=null){
      this.formProduct = new FormGroup({
        'name': new FormControl({value: this.product.name, disabled: false}, [Validators.minLength(3), Validators.required]),
        'description': new FormControl({value: this.product.description, disabled: false}, [Validators.minLength(3), Validators.required]),
        'price': new FormControl({value: this.product.price, disabled: false}, [Validators.minLength(1), Validators.required])
      })
    }else{
      this.formProduct = new FormGroup({
        'name': new FormControl("", [Validators.minLength(3), Validators.required]),
        'description': new FormControl("", [Validators.minLength(3), Validators.required]),
        'price': new FormControl("", [Validators.minLength(1), Validators.required])
      })
    }
  }

  create(product: Product){
    this.productService.create(product).subscribe(result => {
      this.matDialog.close();
      this.productService.getAll().subscribe((result: any) =>{
        this.productService.refreshTable.next(result);
        this.snack.open(`Product Created`, null, {
          duration: 2500,
          panelClass: ["snackbar-created"]
        })
      })
      //console.log(result);
    })  
  }

  update(produc: Product){
    produc.id = this.product.id
    this.productService.update(produc).subscribe(result => {
      this.productService.refreshTable.next(result);
      this.snack.open(`Product Updated`, null, {
        duration: 2500,
        panelClass: ["snackbar-created"]
      })
      console.log(result);
      this.matDialog.close();
    })  
  }

}
