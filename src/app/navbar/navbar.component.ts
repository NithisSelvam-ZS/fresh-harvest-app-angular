import { Component } from '@angular/core';
import { CategoryService } from 'src/Services/category.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  categoryList: any;
  contentColor: string = 'black';
  isExploreClicked: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  showCategoryList = false;

  toggleCategoryList() {
    this.showCategoryList = !this.showCategoryList;
    console.log(this.showCategoryList);
  }

  ngOnInit(): void {
    this.categoryService.getcategoryData().subscribe({
      next: (data) => {
        this.categoryList = data;
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isExploreClicked = this.router.url === '/Farms';
      }
    });
  }

  exploreClicked() {
    this.isExploreClicked = true;
  }
}
