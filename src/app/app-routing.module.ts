import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'blog/:slug', loadChildren: './pages/detail/detail.module#DetailModule' },
  { path: 'filter', loadChildren: './pages/blog-filter/blog-filter.module#BlogFilterModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
  { path: 'lab/life-time', loadChildren: './pages/lab-lifetime/lab-lifetime.module#LabLifetimeModule' },
  { path: 'lab/posts', loadChildren: './pages/posts/posts.module#PostsModule' },
  { path: 'lab', loadChildren: './pages/lab/lab.module#LabModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'auth', loadChildren: './pages/authoring/authoring.module#AuthoringModule' },
  { path: 'auth/:slug', loadChildren: './pages/authoring/authoring.module#AuthoringModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
