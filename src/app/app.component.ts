import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterCustomComponent} from './shared/components/footer-custom/footer-custom.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterCustomComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
