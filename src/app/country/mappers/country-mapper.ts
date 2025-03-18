import {RestCountries} from '../interfaces/rest-countries.interface';
import {Country} from '../interfaces/country.interface';

export class CountryMapper {
  static mapToCountry(country: RestCountries): Country {
    return {
      id: country.idd.root,
      name: country.translations['spa']?.common ?? country.name.common,
      flag: country.flag,
      flagSvg: country.flags.svg,
      capital: country.capital.join(', '),
      population: country.population
    }
  }

  static mapToCountries(countries: RestCountries[]): Country[] {
    return countries.map(CountryMapper.mapToCountry);
  }
}
