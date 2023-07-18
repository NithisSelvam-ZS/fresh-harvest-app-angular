import { Component } from '@angular/core';
import { DealOfTheDayService } from 'src/Services/deal-of-the-day.service';

@Component({
  selector: 'app-dod',
  templateUrl: './dod.component.html',
  styleUrls: ['./dod.component.css']
})
export class DODComponent {
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
