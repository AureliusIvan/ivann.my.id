interface PostTypes {
  _id?: string;
  title: string;
  content: string;
  thumbnail: string;
  date: Date;
  slug: string;
  author: string;
  tags: string[];

}

export { PostTypes }