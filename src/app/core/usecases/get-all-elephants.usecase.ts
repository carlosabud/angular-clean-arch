import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ElephantModel } from '../domain/elephant.model';
import { ElephantRepository } from '../repositories/elephant.repository';

@Injectable({ providedIn: 'root' })
export class GetAllElephantsUseCase implements UseCase<void, ElephantModel[]> {
  constructor(private elephantRepository: ElephantRepository) {}

  execute(param: void): Observable<ElephantModel[]> {
    return this.elephantRepository.getAllElephants();
  }
}
