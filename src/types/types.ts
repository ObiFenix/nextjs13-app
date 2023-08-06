export interface Author {
  username: string;
  avatar: string;
}
export interface Post {
  _id?: string;
  title: string;
  image: string;
  content: string;
  description: string;
  source: string;
  author: Author;
}
export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

// miguelobiang@Miguels-MBP-2.attlocal.net
