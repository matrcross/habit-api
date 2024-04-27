import { Test, TestingModule } from '@nestjs/testing';
import { HabitListController } from './habit-list.controller';
import { HabitListService } from './habit-list.service';

describe('HabitListController', () => {
  let controller: HabitListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitListController],
      providers: [HabitListService],
    }).compile();

    controller = module.get<HabitListController>(HabitListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
