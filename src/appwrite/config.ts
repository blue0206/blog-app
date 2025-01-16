import conf from "../conf/conf.ts"
import { Client, ID, Databases, Storage, Query } from "appwrite";
import { Post, CreatePost } from "../../types/post.ts";

export class Service {
    client: Client = new Client();
    databases: Databases;
    bucket: Storage;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}: CreatePost): Promise<unknown> {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: Create Post :: Error", error);
            throw error;
        }
    }

    async updatePost(slug: string, {title, content, featuredImage, status, userId}: Post): Promise<unknown> {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: Update Post :: Error", error);
            throw error;
        }
    }

    async deletePost(slug: string): Promise<boolean> {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite Service :: Delete Post :: Error:", error);
            return false;
        }
    }

    async getPost(slug: string): Promise<object | boolean> {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite Service :: Get Post :: Error", error);
            return false;
        }
    }

    async getPosts(): Promise<unknown> {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("status", "active")
                ]
            );
        } catch (error) {
            console.log("Appwrite Service :: Get Posts :: Error:", error);
            return false;
        }
    }

    // file services
    async uploadFile(file: File): Promise<object | boolean> {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service :: Upload File :: Error", error);
            return false;
        }
    }

    async deleteFile(fileId: string): Promise<object | boolean> {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite Service :: Delete File :: Error", error);
            return false;
        }
    }

    getFilePreview(fileId: string): string {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}

const service = new Service();

export default service;