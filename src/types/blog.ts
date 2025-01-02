export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  status: 'draft' | 'published';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePostDTO {
  title: string;
  content: string;
  tags: string[];
}

export interface UpdatePostDTO extends Partial<CreatePostDTO> {
  status?: 'draft' | 'published';
}