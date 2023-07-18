import { Component } from '@angular/core';
import { DealOfTheDayService } from 'src/Services/deal-of-the-day.service';

@Component({
  selector: 'app-deal-of-the-day',
  templateUrl: './deal-of-the-day.component.html',
  styleUrls: ['./deal-of-the-day.component.css'],
})
export class DealOfTheDayComponent {
  dealData: any = [];
  constructor(private api: DealOfTheDayService) {}

  ngOnInit(): void {
    this.getDeal();
  }

  getDeal() {
    this.api.getDealOfTheDay().subscribe({
      next: (data) => {
        console.log('deal', data);
        this.dealData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
