import * as dynamoose from "dynamoose";
import {Item} from "dynamoose/dist/Item";

class Weekday  {
    public Habits: Habit[]
}

class Habit  {
    public id: string
    public name: string
    public assignedFor: string
    public complete: boolean

}

class Weekdays extends Item {
    public id: string
    public monday: Weekday
    public tuesday: Weekday
    public wedsneday: Weekday
    public thurday: Weekday
    public friday: Weekday
    public staturday: Weekday
    public sunday: Weekday
}

const habitSchema = new dynamoose.Schema({
    id: Number,
    name: String,
    assignedFor: String,
    complete: Boolean
});

const weekdaySchema = new dynamoose.Schema({
    habits: {
        type: Array,
        schema: [habitSchema],
        default: []
    }
});

const weekdaysSchema = new dynamoose.Schema({
    id:{
        type: String, 
        hashKey: true
    },
    monday: weekdaySchema,
    tuesday: weekdaySchema,
    wednesday: weekdaySchema,
    thursday: weekdaySchema,
    friday: weekdaySchema,
    saturday: weekdaySchema,
    sunday: weekdaySchema,
    
}, {
    timestamps: true
});

const WeekdaysModel = dynamoose.model<Weekdays>('Weekdays', weekdaysSchema);

export { WeekdaysModel, Weekdays }