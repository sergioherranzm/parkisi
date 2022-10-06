import mongoose, { Schema, Document } from 'mongoose';
import { UserProfileDocument } from '../../userProfile/model/UserProfileModel';

export interface VehicleDocument extends Document {
  type: 'car' | 'motorbike' | 'other';
  size: 1 | 2 | 3; //'small' | 'medium' | 'large';
  plate: string;
  model: string;
  owner: UserProfileDocument['_id'];
}

const schema = new Schema(
  {
    type: { type: String, required: true },
    size: { type: Number, required: true },
    plate: { type: String, required: true },
    model: { type: String, required: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true,
    },
  },
  { timestamps: true }
);

export const VehicleModel = mongoose.model<VehicleDocument>('Vehicle', schema);
