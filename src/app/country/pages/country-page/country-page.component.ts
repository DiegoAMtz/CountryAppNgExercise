import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {CountryListComponent} from '../../components/country-list/country-list.component';

@Component({
  selector: 'country-page',
  imports: [
    CountryListComponent
  ],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CountryPageComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  routeParams = toSignal(this.activatedRoute.params);
  countryCode = computed<string>(()=> {
    const params = this.routeParams();
    return params ? params['countryCode'] : '';
  });
}
