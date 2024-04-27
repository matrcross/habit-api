import { Module } from '@nestjs/common';
import { HabitListService } from './habit-list.service';
import { HabitListController } from './habit-list.controller';

@Module({
  controllers: [HabitListController],
  providers: [HabitListService],
})
export class HabitListModule {}
