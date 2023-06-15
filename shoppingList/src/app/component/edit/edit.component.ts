import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  title: string = '';
  id: string = '';
  task: any = '';
  ngOnInit() {
    this.id = this.route.snapshot.params['taskId'];
    this.getTask();
  }
  constructor(
    private router: Router,
    private service: TaskService,
    private route: ActivatedRoute
  ) {}
  goBack() {
    this.router.navigate(['/list-main']);
  }
  addTask() {
    this.service.addTask({ title: this.title, id: this.task.id }).subscribe();
    this.router.navigate(['/list-main']);
  }
  getTask() {
    this.service.getTask(this.id).subscribe((response: any) => {
      this.task = response;
      this.title = response?.title;
    });
  }
}
