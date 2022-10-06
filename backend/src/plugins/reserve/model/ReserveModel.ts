import mongoose, { Schema, Document } from 'mongoose';
import { SlotDocument } from '../../slot/model/SlotModel';
import { UserProfileDocument } from '../../userProfile/model/UserProfileModel';
import { VehicleDocument } from '../../vehicle/model/VehicleModel';

export interface ReserveDocument extends Document {
  period: Date[];
  slot: SlotDocument['_id'];
  owner: UserProfileDocument['_id'];
  vehicle: VehicleDocument['_id'];
}

const schema = new Schema(
  {
    period: { type: [Schema.Types.Date], required: true },
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true,
    },
  },
  { timestamps: true }
);

export const ReserveModel = mongoose.model<ReserveDocument>('Reserve', schema);
