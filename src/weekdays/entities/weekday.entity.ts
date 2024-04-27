import {Item} from "dynamoose/dist/Item";
import { Habit } from "src/types/Habit";

class Weekday  {
    public Habits: Habit[]
}
export class Weekdays extends Item {
    public id: string
    public monday: Weekday
    public tuesday: Weekday
    public wedsneday: Weekday
    public thurday: Weekday
    public friday: Weekday
    public staturday: Weekday
    public sunday: Weekday
}

