import { Routes } from '@angular/router'
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component'
import { WelcomeComponent } from './feature/welcome/welcome.component'

export const routes: Routes = [
  {
    path: 'blocks',
    loadChildren: () =>
      import('./feature/blocks/blocks.module').then((m) => m.BlocksModule),
    data: { preload: true },
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: './welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]
