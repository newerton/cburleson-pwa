import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'blog/:slug', loadChildren: './pages/detail/detail.module#DetailModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
  { path: 'lab/life-time', loadChildren: './pages/lab-lifetime/lab-lifetime.module#LabLifetimeModule' },
  { path: 'lab', loadChildren: './pages/lab/lab.module#LabModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
