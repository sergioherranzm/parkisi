import mongoose, { Document, Schema } from 'mongoose';

export interface UserProfileDocument extends Document {
  nickname: string;
  name?: string;
  surname?: string;
  email: string;
  phone?: number;
  //role: 'client' | 'owner';
}

const schema = new Schema(
  {
    nickname: { type: String, required: true },
    name: String,
    surname: String,
    email: { type: String, required: true, unique: true },
    phone: Number,
    //role: { type: String, required: true },
  },
  { timestamps: true }
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
  schema
);
