import {Item} from "dynamoose/dist/Item";
import { Habit } from "src/types/Habit";

export class HabitList extends Item {
    public id: string
    public items: Habit[]
}