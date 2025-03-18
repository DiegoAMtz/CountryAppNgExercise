import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';
import {CountrySearchInputComponent} from '../../components/country-search-input/country-search-input.component';
import {CountryListComponent} from '../../components/country-list/country-list.component';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [
    CountrySearchInputComponent,
    CountryListComponent
  ],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ByCapitalPageComponent {

  private readonly countryService = inject(CountryService);
  query = signal<string>('')

  countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {
      if (!request.query) return of([]);
      return this.countryService.searchByCapital(request.query);
    }
  });

}
