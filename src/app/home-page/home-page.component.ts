import { Component } from '@angular/core';
import { PromationService } from 'src/Services/promation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  PromotionImage:any=[];

  constructor(private promationService: PromationService) {
    this.getImage()
  }
  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.promationService.getPromoImage().subscribe({
      next: (data) => {
        this.PromotionImage = data;
        console.log(data);
        console.log(this.PromotionImage);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
