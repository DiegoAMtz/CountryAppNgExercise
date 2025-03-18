import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'top-menu',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './top-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuComponent {

}
