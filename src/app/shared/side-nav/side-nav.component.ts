import { Component } from '@angular/core';
import { routes } from '../../examples/demo-dnd-routing.module';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  public components: string[];

  constructor() {
    this.components = routes[0].children.filter(r => !!r.component).map(r => r.path)
  }
}