import { Injectable } from '@nestjs/common';
import { CreateWeekdayDto } from './dto/create-weekday.dto';
import { UpdateWeekdayDto } from './dto/update-weekday.dto';
import { Weekdays, WeekdaysModel } from './entities/weekday.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WeekdaysService {
  async create(createWeekdayDto: CreateWeekdayDto) {
    try {
        // Insert or update the item
      const result = await WeekdaysModel.create({id: uuidv4(), ...createWeekdayDto}, { overwrite: true });
      console.log("Item inserted/updated successfully:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  
    return 'This action adds a new weekday';
  }

  findAll() {
    return `This action returns all weekdays`;
  }

  async findOne(id: string) {
  try {
    const weekdayData = await WeekdaysModel.get(id)

    return weekdayData;
  } catch (error) {
    console.error("Error:", error);
  }


  }

  update(id: number, updateWeekdayDto: UpdateWeekdayDto) {
    return `This action updates a #${id} weekday`;
  }

  remove(id: number) {
    return `This action removes a #${id} weekday`;
  }
}
