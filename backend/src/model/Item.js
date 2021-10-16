import { Schema, model } from 'mongoose';

const ItemSchema = new Schema({
    /** Название задачи */
    name: {
        type: String,
        required: true
    },
    /** Дата задачи */
    date: {
        type: Date,
        default: Date.now
    }
});

const Item = model('item', ItemSchema);

export default Item;