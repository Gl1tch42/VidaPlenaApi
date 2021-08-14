import { Document, Schema, model, connect } from 'mongoose';
interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: number;
}

const schema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, require: true },
    role: { type: Number, default: 0 },
});

export default model<User>('User', schema);

// module.exports = mongoose.model('User', userSchema)