import mongoose, { Document, Schema } from 'mongoose';

export interface UserProfileDocument extends Document {
  auth0_id: string;
  nickname: string;
  name?: string;
  surname?: string;
  email: string;
  phone?: number;
  description?: string;
}

const schema = new Schema(
  {
    auth0_id: { type: String, required: true, unique: true },
    nickname: { type: String, required: true },
    name: String,
    surname: String,
    email: { type: String, required: true, unique: true },
    phone: Number,
    description: String,
  },
  { timestamps: false }
);

schema.virtual('parkings', {
  ref: 'Parking',
  localField: '_id',
  foreignField: 'owner',
});

schema.virtual('vehicles', {
  ref: 'Vehicle',
  localField: '_id',
  foreignField: 'owner',
});

schema.virtual('reserves', {
  ref: 'Reserve',
  localField: '_id',
  foreignField: 'owner',
});

export const UserProfileModel = mongoose.model<UserProfileDocument>(
  'UserProfile',
  schema,
  'userprofiles'
);
