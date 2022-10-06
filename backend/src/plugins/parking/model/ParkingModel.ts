import mongoose, { Schema, Document } from 'mongoose';
import { SlotDocument } from '../../slot/model/SlotModel';
import { UserProfileDocument } from '../../userProfile/model/UserProfileModel';

export interface ParkingDocument extends Document {
  address: string;
  postalCode: string;
  city?: string;
  province?: string;
  location: { type: 'Point'; coordinates: [number, number] }; //GeoJSON
  owner: UserProfileDocument['_id']; //Schema.Types.ObjectId
}

const schema = new Schema(
  {
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: String,
    province: String,
    location: {
      type: { type: String, enum: ['Point'], required: true },
      coodinates: {
        type: [Number],
        index: { type: '2dsphere', sparse: false },
        required: true,
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true,
    },
  },
  { timestamps: true }
);

schema.virtual('slots', {
  ref: 'Slot',
  localField: '_id',
  foreignField: 'parking',
});

//schema.index({ location: '2dsphere' });

export const ParkingModel = mongoose.model<ParkingDocument>('Parking', schema);
