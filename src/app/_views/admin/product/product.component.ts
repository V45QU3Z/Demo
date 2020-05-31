import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Product } from '../../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  //produc = new Product();
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions'];
  dataSource: MatTableDataSource<Product>;
  constructor(
    private productService: ProductService,
    private matDialog: MatDialog,
    private snack: MatSnackBar,
    ) { }

  ngOnInit() {
    this.getAll();

    
    this.productService.refreshTable.subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);

      })
  

  }

  getAll(){
    this.productService.getAll().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
    })
  }

  showOne(id: string){
    this.productService.getAllById(id).subscribe((result: any) => {
      console.log(result)
      this.matDialog.open(DialogComponent, {data: result});
    })
  }

  openDialog(){
    this.matDialog.open(DialogComponent);
  }

  delete(id: string){
    this.productService.delete(id).subscribe(result => {
      this.productService.getAll().subscribe((result: any) => {
        this.productService.refreshTable.next(result);
        this.snack.open(`Product Deleted`, null, {
          duration: 2500,
          panelClass: ["snackbar-created"]
        })

      })
      console.log('deleted');
    })
  }

}
