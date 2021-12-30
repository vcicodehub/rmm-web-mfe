import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    component: ShellComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
    ] },
];

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShellModule { }
