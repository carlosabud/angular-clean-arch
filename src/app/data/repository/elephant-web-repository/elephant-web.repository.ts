import { Observable } from 'rxjs';
import { ElephantModel } from 'src/app/core/domain/elephant.model';
import { ElephantRepository } from 'src/app/core/repositories/elephant.repository';
import { ElephantWebRepositoryMapper } from './elephant-web-repository-mapper';
import { map } from 'rxjs/operators';
import { ElephantWebEntity } from './elephant-web-entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ElephantWebRepository extends ElephantRepository {
  mapper = new ElephantWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getElephantById(id: number): Observable<ElephantModel> {
    return this.http
      .get<ElephantWebEntity>(
        `http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/elephants/${id}`
      )
      .pipe(map(this.mapper.mapFrom));
  }
  getAllElephants(): Observable<ElephantModel[]> {
    return this.http
      .get<ElephantWebEntity[]>(
        `http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/elephants`
      )
      .pipe(map((items) => items.map(this.mapper.mapFrom)));
  }
}
