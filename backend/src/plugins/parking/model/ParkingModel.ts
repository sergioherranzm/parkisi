import mongoose, { Schema, Document } from 'mongoose';
import { UserProfileDocument } from '../../userProfile/model/UserProfileModel';

export interface ParkingDocument extends Document {
  street: string;
  streetNumber?: string;
  postalCode?: string;
  city: string;
  province?: string;
  location: { type: 'Point'; coordinates: [number, number] }; //GeoJSON
  description: string;
  image: string;
  owner: UserProfileDocument['_id'];
}

const schema = new Schema(
  {
    street: { type: String, required: true },
    streetNumber: String,
    postalCode: String,
    city: { type: String, required: true },
    province: String,
    location: {
      type: { type: String, enum: ['Point'], required: true },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    description: { type: String, required: true },
    image: { type: String, required: true },
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

schema.index({ location: '2dsphere' });

export const ParkingModel = mongoose.model<ParkingDocument>(
  'Parking',
  schema,
  'parkings'
);
