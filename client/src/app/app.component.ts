import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MockupService } from './shared/mockup.service';
import { HealthResponse } from './shared/response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private mockupService: MockupService) {}

  ngOnInit(): void {
    console.log(`Listen on ${environment.flaskHost}`);
    this.mockupService
      .getHealth()
      .subscribe((data: HealthResponse) => console.log(data));
  }
}
