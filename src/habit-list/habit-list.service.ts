import { Injectable } from '@nestjs/common';
import { CreateHabitListDto } from './dto/create-habit-list.dto';
import { UpdateHabitListDto } from './dto/update-habit-list.dto';

@Injectable()
export class HabitListService {
  create(createHabitListDto: CreateHabitListDto) {
    return 'This action adds a new habitList';
  }

  findAll() {
    return `This action returns all habitList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitList`;
  }

  update(id: number, updateHabitListDto: UpdateHabitListDto) {
    return `This action updates a #${id} habitList`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitList`;
  }
}
