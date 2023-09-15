import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'html',
    loadChildren: () =>
      import('./features/html/html.module').then((m) => m.HtmlModule),
  },
  {
    path: 'css',
    loadChildren: () =>
      import('./features/css/css.module').then((m) => m.CssModule),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./features/javascript/javascript.module').then(
        (m) => m.JavascriptModule
      ),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./features/angular/angular.module').then((m) => m.AngularModule),
  },
  { path: '**', redirectTo: 'html' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
