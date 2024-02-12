import { Component, Input } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { NavigationListItem } from './side-navigation.model'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgClass } from '@angular/common'

@Component({
  selector: 'awn-side-navigation',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    NgClass,
  ],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.scss',
})
export class SideNavigationComponent {
  @Input() navigationConfig: NavigationListItem[] = []

  @Input() isOpened = false
}
