export interface Post {
    title: string;
    content: string;
    featuredImage: string;
    status: string;
    userId: string;
}

export interface CreatePost extends Post {
    slug: string;
}