import { CounterStateInterface } from 'src/app/counter/types/counter.interface';
import { PostStateInterface } from 'src/app/posts/store/types/post.interface';

export interface AppStateInterface {
  counter: CounterStateInterface;
  posts: PostStateInterface;
}
