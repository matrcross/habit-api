import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitListService } from './habit-list.service';
import { CreateHabitListDto } from './dto/create-habit-list.dto';
import { UpdateHabitListDto } from './dto/update-habit-list.dto';

@Controller('habit-list')
export class HabitListController {
  constructor(private readonly habitListService: HabitListService) {}

  @Post()
  create(@Body() createHabitListDto: CreateHabitListDto) {
    return this.habitListService.create(createHabitListDto);
  }

  @Get()
  findAll() {
    return this.habitListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitListDto: UpdateHabitListDto) {
    return this.habitListService.update(+id, updateHabitListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitListService.remove(+id);
  }
}
