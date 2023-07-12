import { Component, Input } from '@angular/core';
import { PromationService } from 'src/Services/promation.service';



@Component({
  selector: 'app-farms-home',
  templateUrl: './farms-home.component.html',
  styleUrls: ['./farms-home.component.css'],
})
export class FarmsHomeComponent {
  farmsData: any[] = [];

  constructor( private http: PromationService,) {}

  ngOnInit(): void {

    this.getFarms();

    }

  getFarms(): void {
    this.http.getFarmsData().subscribe({
      next: (data) => {
        console.log(data);
        this.farmsData = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
