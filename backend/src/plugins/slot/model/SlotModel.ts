import mongoose, { Schema, Document, Date } from 'mongoose';
import { ParkingDocument } from '../../parking/model/ParkingModel';

export interface SlotDocument extends Document {
  identification: string;
  size: 1 | 2 | 3; //'small' | 'medium' | 'large';
  difficulty: 'easy' | 'medium' | 'hard';
  price: number;
  parking: ParkingDocument['_id'];
}

const schema = new Schema(
  {
    identification: { type: String, required: true },
    size: { type: Number, required: true },
    difficulty: { type: String, required: true },
    price: { type: Number, required: true },
    parking: {
      type: Schema.Types.ObjectId,
      ref: 'Parking',
      required: true,
    },
  },
  { timestamps: true }
);

schema.virtual('reserves', {
  ref: 'Reserve',
  localField: '_id',
  foreignField: 'slot',
});

export const SlotModel = mongoose.model<SlotDocument>('Slot', schema, 'slots');
