import { Document, Schema, model, connect } from 'mongoose';

interface Video extends Document {
    videoName: string;
    url: string;
    formId: string;
    index: number;
}

const schema = new Schema<Video>({
    videoName: { type: String, required: true },
    url: { type: String, required: true },
    formId: { type: String, require: true },
    index: { type: Number, require: true }
});

export default model<Video>('Video', schema);
