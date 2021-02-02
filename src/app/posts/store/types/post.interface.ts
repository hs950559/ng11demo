export interface PostInterface {
  id: number;
  title: string;
  createdOn: string;
  body: string;
}

export interface PostStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PostInterface[] | null;
}
