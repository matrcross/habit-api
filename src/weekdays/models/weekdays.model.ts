import * as dynamoose from "dynamoose";
import { Weekdays } from "../entities/weekday.entity";

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

export { WeekdaysModel}