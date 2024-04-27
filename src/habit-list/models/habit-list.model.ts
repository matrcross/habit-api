import * as dynamoose from "dynamoose";
import { HabitList } from "../entities/habit-list.entity";

const habitSchema = new dynamoose.Schema({
    id: Number,
    name: String,
    assignedFor: String,
    complete: Boolean
});

const habitListSchema = new dynamoose.Schema({
    userId: Number,
    items: {
        type: Array,
        schema: [habitSchema],
        default: []
    }
});


const HabitListModel = dynamoose.model<HabitList>('Weekdays', habitListSchema);

export { HabitListModel}