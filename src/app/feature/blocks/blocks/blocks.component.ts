import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksComponent {}
