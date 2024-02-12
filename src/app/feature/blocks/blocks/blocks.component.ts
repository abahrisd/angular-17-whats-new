import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksComponent {}
