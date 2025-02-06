import { ILike } from '../interfaces/like.interface';

export class Like implements ILike {
  id: number = 0;
  user_id: number = 0;
  article_id: number = 0;
  is_liked: boolean = false;
}
