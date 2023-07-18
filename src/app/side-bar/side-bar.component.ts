import { Component } from '@angular/core';
import { SidebarService } from 'src/Services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  categoryItem: any;
  subCategoryItem:any;

  constructor(private api: SidebarService) {}

  ngOnInit(): void {
   this.getCategoryList();
   this.getSubCategoryList()

  }

  getCategoryList() {
    this.api.getCategory().subscribe({
      next: (data) => {
        console.log('List Item', data);
        this.categoryItem = data;
        console.log(this.categoryItem)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSubCategoryList(){
    this.api.getSubCategory().subscribe({
      next: (data) =>{
        console.log("Sub Category List",data);
        this.subCategoryItem = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
