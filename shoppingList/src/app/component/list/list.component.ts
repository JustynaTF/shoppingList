import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  title: string = '';

  constructor(private router: Router, private service: ListService) {}

  goBack() {
    this.router.navigate(['/list-main']);
  }

  addList() {
    this.service.addList({ title: this.title }).subscribe(() => {
      this.router.navigate(['/list-main']);
    });
  }
}
