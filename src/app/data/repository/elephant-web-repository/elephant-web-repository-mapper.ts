import { Mapper } from 'src/app/core/base/mapper';
import { ElephantModel } from 'src/app/core/domain/elephant.model';
import { ElephantWebEntity } from './elephant-web-entity';

export class ElephantWebRepositoryMapper extends Mapper<
  ElephantWebEntity,
  ElephantModel
> {
  mapFrom(param: ElephantWebEntity): ElephantModel {
    return {
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday),
    };
  }
  mapTo(param: ElephantModel): ElephantWebEntity {
    return {
      id: 0,
      name: param.name,
      family: param.family,
      birthday: param.birthday.getTime(),
    };
  }
}
