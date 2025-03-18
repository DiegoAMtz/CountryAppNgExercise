import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TopMenuComponent} from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'country-layout',
  imports: [
    RouterOutlet,
    TopMenuComponent
  ],
  templateUrl: './country-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CountryLayoutComponent {

}
