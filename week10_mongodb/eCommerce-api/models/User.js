import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    password: { type: String, required: [true, 'Email is required'], select: false, minLength: 8 }
  },
  { timestamps: true }
);

export default model('User', userSchema);
