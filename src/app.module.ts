import { Module } from '@nestjs/common';
import { WeekdaysModule } from './weekdays/weekdays.module';
import { HabitListModule } from './habit-list/habit-list.module';

@Module({
  imports: [WeekdaysModule, HabitListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
