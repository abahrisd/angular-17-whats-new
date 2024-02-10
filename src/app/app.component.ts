import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
}
