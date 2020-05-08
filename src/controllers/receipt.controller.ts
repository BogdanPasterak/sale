import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Receipt} from '../models';
import {ReceiptRepository} from '../repositories';

export class ReceiptController {
  constructor(
    @repository(ReceiptRepository)
    public receiptRepository : ReceiptRepository,
  ) {}

  @post('/receipts', {
    responses: {
      '200': {
        description: 'Receipt model instance',
        content: {'application/json': {schema: getModelSchemaRef(Receipt)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receipt, {
            title: 'NewReceipt',
            exclude: ['id'],
          }),
        },
      },
    })
    receipt: Omit<Receipt, 'id'>,
  ): Promise<Receipt> {
    return this.receiptRepository.create(receipt);
  }

  @get('/receipts/count', {
    responses: {
      '200': {
        description: 'Receipt model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Receipt) where?: Where<Receipt>,
  ): Promise<Count> {
    return this.receiptRepository.count(where);
  }

  @get('/receipts', {
    responses: {
      '200': {
        description: 'Array of Receipt model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Receipt, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Receipt) filter?: Filter<Receipt>,
  ): Promise<Receipt[]> {
    return this.receiptRepository.find(filter);
  }

  @patch('/receipts', {
    responses: {
      '200': {
        description: 'Receipt PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receipt, {partial: true}),
        },
      },
    })
    receipt: Receipt,
    @param.where(Receipt) where?: Where<Receipt>,
  ): Promise<Count> {
    return this.receiptRepository.updateAll(receipt, where);
  }

  @get('/receipts/{id}', {
    responses: {
      '200': {
        description: 'Receipt model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Receipt, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Receipt, {exclude: 'where'}) filter?: FilterExcludingWhere<Receipt>
  ): Promise<Receipt> {
    return this.receiptRepository.findById(id, filter);
  }

  @patch('/receipts/{id}', {
    responses: {
      '204': {
        description: 'Receipt PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receipt, {partial: true}),
        },
      },
    })
    receipt: Receipt,
  ): Promise<void> {
    await this.receiptRepository.updateById(id, receipt);
  }

  @put('/receipts/{id}', {
    responses: {
      '204': {
        description: 'Receipt PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() receipt: Receipt,
  ): Promise<void> {
    await this.receiptRepository.replaceById(id, receipt);
  }

  @del('/receipts/{id}', {
    responses: {
      '204': {
        description: 'Receipt DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.receiptRepository.deleteById(id);
  }
}
