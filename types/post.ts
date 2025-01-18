import { Models } from "appwrite";

export interface Post extends Models.Document {
    title: string;
    content: string;
    featuredImage: string;
    status: string;
}

export interface CreatePost extends Post {
    slug: string;
    userId: string;
}