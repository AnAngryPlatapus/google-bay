import database from '../../../core/database'
import { Schema } from 'mongoose'

const schema = new Schema({
    title: String,
    text: String,
    image: String,
    createdBy: { type: Schema.Types.ObjectId, ref: 'Account' }
})

export default database.model('Todo', schema)
