import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamListPage } from './exam-list/exam-list.page';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: ExamListPage
  }
];

@NgModule({
  declarations: [ExamListPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class ExamsModule { }
