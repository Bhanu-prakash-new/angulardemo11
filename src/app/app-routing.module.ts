import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableFreshComponent } from './table-fresh/table-fresh.component';
import { NewtableComponent } from './newtable/newtable.component';

const routes: Routes = [
  {
    path: "tableOld",
    component: TableFreshComponent
  },
  {
    path: 'tableNew',
    component: NewtableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
