import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ElephantModel } from '../domain/elephant.model';
import { ElephantRepository } from '../repositories/elephant.repository';

@Injectable({ providedIn: 'root' })
export class getElephantByIdUseCase implements UseCase<number, ElephantModel> {
  constructor(private elephantRepository: ElephantRepository) {}

  execute(param: number): Observable<ElephantModel> {
    return this.elephantRepository.getElephantById(param);
  }
}
