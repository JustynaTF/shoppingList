import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  showAddListForm: boolean = false;
  list: any[] = [];
  title: string = '';
  id: string = '';
  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['listId'];
  }

  goBack() {
    this.router.navigate(['/list-main']);
  }
  addTask() {
    const data = {
      title: this.title,
      listId: this.id,
    };
    this.service.addTask(data).subscribe();
    this.router.navigate(['/list-main']);
  }
}
