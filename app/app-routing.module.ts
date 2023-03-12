import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business.module').then(m => m.BusinessModule)
  },
  {
    path: 'malifood',
    loadChildren: () => import('./pages/malifood/malifood.module').then(m => m.MalifoodModule)
  },
  {
    path: 'maomali',
    loadChildren: () => import('./pages/maomali/maomali.module').then(m => m.MaomaliModule)
  },
  {
    path: 'malicafe',
    loadChildren: () => import('./pages/malicafe/malicafe.module').then(m => m.MalicafeModule)
  },
  {
    path: 'maligrow',
    loadChildren: () => import('./pages/maligrow/maligrow.module').then(m => m.MaligrowModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
