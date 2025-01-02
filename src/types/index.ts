// All application types consolidated in one file

import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Document } from 'mongoose';

// Auth Types
export interface AuthRequest extends Request {
  user?: JwtPayload & {
    userId: string;
    email: string;
    role: string;
  };
}

export interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

// User Types
export interface UserRole extends Document {
  name: 'admin' | 'editor' | 'user';
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  lastLogin?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Post Types
export interface Post extends Document {
  title: string;
  content: string;
  author: User['_id'];
  status: PostStatus;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type PostStatus = 'draft' | 'published';

export interface CreatePostDTO {
  title: string;
  content: string;
  tags: string[];
  status?: PostStatus;
}

export interface UpdatePostDTO extends Partial<CreatePostDTO> {
  status?: PostStatus;
}

// Response Types
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export interface ErrorResponse {
  status: 'error';
  message: string;
  errors?: any;
}

// Request Query Types
export interface PaginationQuery {
  page?: number;
  limit?: number;
  sort?: string;
}

export interface PostFilters extends PaginationQuery {
  status?: PostStatus;
  author?: string;
  tags?: string[];
  search?: string;
}

// Config Types
export interface AppConfig {
  port: number;
  mongoUri: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  refreshTokenSecret: string;
  refreshTokenExpiresIn: string;
  env: string;
  logLevel: string;
}