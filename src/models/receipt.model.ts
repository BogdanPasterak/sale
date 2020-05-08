import {Entity, model, property} from '@loopback/repository';

@model()
export class Receipt extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: false,
  })
  id: number;

  @property({
    type: 'number',
  })
  commodityId?: number;

  @property({
    type: 'number',
  })
  dealerId?: number;

  @property({
    type: 'number',
  })
  shopId?: number;


  constructor(data?: Partial<Receipt>) {
    super(data);
  }
}

export interface ReceiptRelations {
  // describe navigational properties here
}

export type ReceiptWithRelations = Receipt & ReceiptRelations;
