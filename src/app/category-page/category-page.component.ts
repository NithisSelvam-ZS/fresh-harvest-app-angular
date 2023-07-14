import { Component } from '@angular/core';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {

  categoryData: any;

  constructor(private categoryService:CategoryService ){}
ngOnInit(): void {
    this.categoryService.getcategoryListData().subscribe({
      next: (data) => {
        this.categoryData = data;
        console.log(this.categoryData, 'A');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

}
