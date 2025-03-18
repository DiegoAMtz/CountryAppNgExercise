import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {RestCountries} from '../interfaces/rest-countries.interface';
import {Country} from '../interfaces/country.interface';
import {CountryMapper} from '../mappers/country-mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private httpClient = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    return this.httpClient.get<RestCountries[]>(`${environment.apiUrl}/capital/${query?.toLowerCase()}`).pipe(
      map(countries => CountryMapper.mapToCountries(countries)),
      catchError(err => {
        console.log(err);
        return throwError(() => new Error(`No se pudieron obtener paises con la capital ${query}`));
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this.httpClient.get<RestCountries[]>(`${environment.apiUrl}/name/${query?.toLowerCase()}`).pipe(
      map(countries => CountryMapper.mapToCountries(countries)),
      catchError(err => {
        console.log(err);
        return throwError(() => new Error(`No se pudieron obtener paises con el nombre ${query}`));
      })
    );
  }
}
