import { Module } from '@nestjs/common';
import { WeekdaysModule } from './weekdays/weekdays.module';

@Module({
  imports: [WeekdaysModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
