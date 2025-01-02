// Role model for user permissions
import mongoose, { Schema } from 'mongoose';
import { UserRole } from '../types';

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: ['admin', 'editor', 'user'], // Restrict to valid roles
    trim: true,
  },
  permissions: [{
    type: String,
    required: false, // Make permissions optional
  }],
}, {
  timestamps: true,
});

export default mongoose.model<UserRole & Document>('Role', roleSchema);