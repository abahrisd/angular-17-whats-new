import { NgModule } from '@angular/core'
import { BlocksComponent } from './blocks/blocks.component'
import { RouterModule } from '@angular/router'

const blockRoutes = [
  {
    path: '',
    component: BlocksComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(blockRoutes)],
  exports: [RouterModule],
})
export class BlocksRoutingModule {}
