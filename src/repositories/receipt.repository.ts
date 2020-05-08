import {DefaultCrudRepository} from '@loopback/repository';
import {Receipt, ReceiptRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReceiptRepository extends DefaultCrudRepository<
  Receipt,
  typeof Receipt.prototype.id,
  ReceiptRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Receipt, dataSource);
  }
}
