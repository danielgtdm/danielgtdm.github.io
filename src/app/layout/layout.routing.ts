import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pages',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
