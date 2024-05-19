import { Test, TestingModule } from '@nestjs/testing';
import { InventoryManagementController } from './inventory_management.controller';
import { InventoryManagementService } from './inventory_management.service';

describe('InventoryManagementController', () => {
  let controller: InventoryManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryManagementController],
      providers: [InventoryManagementService],
    }).compile();

    controller = module.get<InventoryManagementController>(InventoryManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
