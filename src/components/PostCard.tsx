import { ReactElement } from "react";
import AppwriteService from "../appwrite/config.ts";
import { Link } from "react-router-dom";
import { PostCardProps } from "../../types/component-types.ts";

export default function PostCard({
    
    $id,
    title,
    featuredImage

}: PostCardProps): ReactElement {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={AppwriteService.getFilePreview(featuredImage)} alt={title} />
                </div>
                <h2>{title}</h2>
            </div>
        </Link>
    );
};