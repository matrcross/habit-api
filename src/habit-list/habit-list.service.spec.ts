import { Test, TestingModule } from '@nestjs/testing';
import { HabitListService } from './habit-list.service';

describe('HabitListService', () => {
  let service: HabitListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitListService],
    }).compile();

    service = module.get<HabitListService>(HabitListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
