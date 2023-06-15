import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMainComponent } from './component/list-main/list-main.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/list/list.component';
import { ProductComponent } from './component/product/product.component';
import { EditComponent } from './component/edit/edit.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  { path: '', component: ListMainComponent },
  { path: 'list-main', component: ListMainComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'task/:listId', component: ProductComponent },
  { path: 'edit/:taskId', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
