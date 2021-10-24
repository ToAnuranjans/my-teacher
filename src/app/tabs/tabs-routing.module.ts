import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../features/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../features/courses/courses.module').then(m => m.CoursesModule)
      },
      {
        path: 'exams',
        loadChildren: () => import('../features/exams/exams.module').then(m => m.ExamsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../features/users/users.module').then(m => m.UsersModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
