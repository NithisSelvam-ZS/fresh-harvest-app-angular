import { Component } from '@angular/core';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  categoryList: any;


  constructor(private categoryService:CategoryService) {}

  showCategoryList = false;

    toggleCategoryList() {
        this.showCategoryList = !this.showCategoryList;
        console.log(this.showCategoryList);
    }

    ngOnInit():void{
    this.categoryService.getcategoryData().subscribe({
      next : (data)=>{this.categoryList =data},
      error: (error)=>{console.error(error)}
    })
    }





}
