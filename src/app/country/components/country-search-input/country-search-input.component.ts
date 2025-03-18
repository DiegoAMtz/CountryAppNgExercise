import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySearchInputComponent {
  placeholder = input<string>('Buscar');
  search = output<string>();
}
