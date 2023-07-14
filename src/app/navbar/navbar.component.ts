import { Component } from '@angular/core';
import { CategoryService } from 'src/Services/category.service';
import { Router, NavigationEnd } from '@angular/router';
import { PostalcodeService } from 'src/Services/postalcode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  categoryList: any;
  contentColor: string = 'black';
  isExploreClicked: boolean = false;
  Pincode: string = '';
  District: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private postalcodeService:PostalcodeService
  ) {}

  showCategoryList = false;
  showLocationList = false;

  toggleCategoryList() {
    this.showCategoryList = !this.showCategoryList;
    console.log(this.showCategoryList);
  }
  toggleCategoryListOff() {
    this.showCategoryList = false;
  }

  toggleLocationList() {
    this.showLocationList = !this.showLocationList;
  }

  //To Update Loaction When it is entered in the Location Field
  updateLocation() {
    if (this.Pincode && this.Pincode.trim() !== '') {
      this.postalcodeService.getPincodeData(this.Pincode).subscribe(
        (data) => {
          const postOffices = data[0]?.PostOffice;
          if (postOffices && postOffices.length > 0) {
            this.District = postOffices[0].District;

            // Save the District value to localStorage
            localStorage.setItem('District', this.District);
          } else {
            this.District = 'Location';
          }
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    } else {
      console.log('Please enter a valid Pincode');
    }
  }

  ngOnInit(): void {
    const savedDistrict = localStorage.getItem('District');
    this.District = savedDistrict ? savedDistrict : 'Location';

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
