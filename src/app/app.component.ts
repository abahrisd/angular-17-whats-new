import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SideNavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-17-whats-new'
  links = [
    {
      routerLink: '/blocks',
      name: 'Blcoks',
    },
    {
      routerLink: '/',
      name: 'Welcome',
    },
  ]

  isNavigationOpened = false

  navigationConfig = [
    { title: 'Welcome', routerLink: '/welcome', icon: 'home' },
    { title: 'Blocks', routerLink: '/blocks', icon: 'apps' },
    { title: 'Login', routerLink: '/login', icon: 'login' },
    { title: 'Admin', routerLink: '/admin', icon: 'settings_applications' },
  ]

  public toggleNavigationOpenedState() {
    this.isNavigationOpened = !this.isNavigationOpened
  }
}
