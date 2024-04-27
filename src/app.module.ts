import { Module } from '@nestjs/common';
import { AppService } from '../test/app.service';
import { WeekdaysModule } from './weekdays/weekdays.module';

@Module({
  imports: [WeekdaysModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
