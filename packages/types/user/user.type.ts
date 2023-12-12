import { PostType } from "../post/post.type";

export type UserType = {
    id: string;
    name: string;
    email: string;
    password: string;
    posts: PostType[];
}