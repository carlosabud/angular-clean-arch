import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElephantModel } from 'src/app/core/domain/elephant.model';
import { ElephantRepository } from 'src/app/core/repositories/elephant.repository';
import { ElephantMockEntity } from './elephant-mock-entity';
import { ElephantMockRepositoryMapper } from './elephant-mock-repository-mapper';

@Injectable({ providedIn: 'root' })
export class ElephantMockRepository extends ElephantRepository {
  mapper = new ElephantMockRepositoryMapper();

  elephants: ElephantMockEntity[] = [
    {
      id: 1,
      name: 'Mr. MockBig',
      family: 'father',
      birthday: Date.now(),
    },
    {
      id: 2,
      name: 'Mrs. MockTootoot',
      family: 'mother',
      birthday: Date.now(),
    },
    {
      id: 3,
      name: 'LittleMockToot',
      family: 'baby',
      birthday: Date.now(),
    },
  ];

  constructor() {
    super();
  }

  getElephantById(id: number): Observable<ElephantModel> {
    return of(this.elephants).pipe(
      map((elephants: any) => elephants.find((e: any) => e.id === id)),
      map(this.mapper.mapFrom)
    );
  }
  getAllElephants(): Observable<ElephantModel[]> {
    return of(this.elephants).pipe(
      map((items) => items.map((item) => this.mapper.mapFrom(item)))
    );
  }
}
