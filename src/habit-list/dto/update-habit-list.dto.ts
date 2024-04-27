import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitListDto } from './create-habit-list.dto';

export class UpdateHabitListDto extends PartialType(CreateHabitListDto) {}
